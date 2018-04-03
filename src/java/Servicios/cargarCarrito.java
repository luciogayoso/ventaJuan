package Servicios;

import EntidadDAD.productoDAO;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import peticiones.Carrito;

/**
 *
 * @author Vitalia Miranda
 */
@WebServlet(name = "cargarCarrito", urlPatterns = {"/cargarCarrito"})
public class cargarCarrito extends HttpServlet {

   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       PrintWriter out = response.getWriter();
    
       String id = request.getParameter("idUsuario");
       productoDAO cargar = new productoDAO();
       Gson gson = new Gson();
       List resul = cargar.recuperarCarritoIdPro(id);
       List resultados = new ArrayList();
       HashMap idPro = new HashMap();
       HashMap produc = new HashMap();
       List produCom = new ArrayList();
       String talle;
       String cantidad;
        
       for (int i = 0; i < resul.size(); i++) {
           idPro = (HashMap) resul.get(i);
           String idProductos = (String) idPro.get("id_producto");
           talle = (String) idPro.get("c_talle");
           cantidad = (String) idPro.get("c_cantidad");
           String idCarrito = (String) idPro.get("id_carrito");
           resultados = cargar.recuperarProductoCarrito(idProductos);
           produc = (HashMap) resultados.get(0);
           String precio = (String) produc.get("p_precio");
           String img = (String) produc.get("p_img");
           String nombre = (String) produc.get("p_nombre");
           
        String[] productoLista = {img , nombre , precio , talle, cantidad, idCarrito};
        
        produCom.add(i, productoLista);
        }
       
       String resultado = gson.toJson(produCom);
       out.print(resultado);
    }
    

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        PrintWriter out = response.getWriter();
        String datos = request.getReader().readLine();
        productoDAO cargar = new productoDAO();

        Gson gson = new Gson();
        Carrito c = gson.fromJson(datos, Carrito.class);

        String resultado = cargar.cargarCarrito(c);

        out.print(resultado);
    }

   @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       PrintWriter out = response.getWriter();
    
       String id = request.getParameter("idUsuario");
       productoDAO cargar = new productoDAO();
       
       String resultado = cargar.deleteProductoCarrito(id);
      
       out.print(resultado);
    } 
    
}
