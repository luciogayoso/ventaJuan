package Servicios;

import EntidadDAD.productoDAO;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "seleccionarTipoPro", urlPatterns = {"/seleccionarTipoPro"})
public class seleccionarTipoPro extends HttpServlet {

   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String pagina = request.getParameter("contenido");
        String idProducto = request.getParameter("idPro");
        productoDAO pedir = new productoDAO();
        Gson gson = new Gson();
        List res ;
        
        if (pagina.equals("null")) {
            
                res = pedir.recuperarOtroColores(idProducto);

                String respuesta = gson.toJson(res);

                out.print(respuesta);
            
        }else if (pagina.equals("Liquidacion")) {
                res = pedir.recuperarProductoTipoLiquidacion(pagina);

                String respuesta = gson.toJson(res);

                out.print(respuesta);
            }else {
            res = pedir.recuperarProductoTipo(pagina);

            String respuesta = gson.toJson(res);

            out.print(respuesta);
        }
      
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

}
