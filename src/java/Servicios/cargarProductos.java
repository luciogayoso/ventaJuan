package Servicios;

import EntidadDAD.productoDAO;
import com.google.gson.Gson;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Paths;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import peticiones.Producto;


@WebServlet(name = "cargarProductos", urlPatterns = {"/cargarProductos"})
@MultipartConfig
public class cargarProductos extends HttpServlet {
public static  final String aEnviar = "C:/Users/Vitalia Miranda/Documents/NetBeansProjects/ventaJuan/web/img/";
 
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        productoDAO pedir = new productoDAO();
        Gson gson = new Gson();
        List res = pedir.recuperar();
        
        String respuesta = gson.toJson(res);
    
    out.print(respuesta);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        PrintWriter out = response.getWriter();
        String nombre = request.getParameter("nombre");
        String color = request.getParameter("color");
        String stock = request.getParameter("stock");
        String precio = request.getParameter("precio");
        String tipo = request.getParameter("tipo");
        Part foto = request.getPart("foto");
        Part fotob = request.getPart("fotob");
        productoDAO cargar = new productoDAO();

        String nombreArchivoFoto = Paths.get(foto.getSubmittedFileName()).getFileName().toString();

        nombreArchivoFoto = nombreArchivoFoto.replace(".", "#");
        String[] ruta = nombreArchivoFoto.split("#");
        String cuerpo = ruta[0];
        String extencion = ruta[1];
        String nuevaRuta = cuerpo + "." + extencion;
        String cuerpob = ruta[0];
        String extencionb = ruta[1];
        String cuerpoF = cuerpob + "@.";
        String nuevaRutab = cuerpoF + extencionb;

        InputStream isFotob = fotob.getInputStream();
        InputStream isFoto = foto.getInputStream();

        Producto p = new Producto();

        p.setCodigo("fkfjdks");
        p.setNombre(nombre);
        p.setColor(color);
        p.setPrecio(precio);
        p.setStock(stock);
        p.setTipo(tipo);
        p.setFoto(nuevaRuta);
        p.setFotob(nuevaRutab);

        String resultado = cargar.cargarProsucto(p);

        
        File fb = new File(this.aEnviar + nuevaRutab);
        FileOutputStream ousb = new FileOutputStream(fb);
        int datob = isFotob.read();
        while (datob != -1) {
            ousb.write(datob);
            datob = isFotob.read();
        }

        File f = new File(this.aEnviar + nuevaRuta);
        FileOutputStream ous = new FileOutputStream(f);
        int dato = isFoto.read();
        while (dato != -1) {
            ous.write(dato);
            dato = isFoto.read();
        }
        out.print(resultado);
    }
    
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
PrintWriter out = response.getWriter();

out.print("funciona");
       
    }
}
