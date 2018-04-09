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
import peticiones.OtrosColores;
import peticiones.Producto;


@WebServlet(name = "cargarProductos", urlPatterns = {"/cargarProductos"})
@MultipartConfig
public class cargarProductos extends HttpServlet {
public static  final String aEnviar = "C:/Users/Vitalia Miranda/Documents/NetBeansProjects/ventaJuan/web/img/";
 
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String idProducto = request.getParameter("id_producto");
        productoDAO pedir = new productoDAO();
        Gson gson = new Gson();
        List res ;
        
        if (idProducto == null) {
            
        res = pedir.recuperar();
        
        String respuesta = gson.toJson(res);
    
    out.print(respuesta);
    }else {
        
        res = pedir.recuperarProducto(idProducto);
        
        String respuesta = gson.toJson(res);
    
    out.print(respuesta);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        PrintWriter out = response.getWriter();
        String put = request.getParameter("put");
        
        if (put.equals("true")) {
        String idProducto = request.getParameter("producto");
        String color = request.getParameter("color");
        String cantidadS = request.getParameter("CS");
        String cantidadM = request.getParameter("CM");
        String cantidadL   = request.getParameter("CL");
        String cantidadXL = request.getParameter("CXL");
        String cantidadTotal = request.getParameter("CT");
        
        Part foto = request.getPart("foto");
        String nombreArchivoFoto = Paths.get(foto.getSubmittedFileName()).getFileName().toString();

        OtrosColores o = new OtrosColores();
        o.setIdProducto(idProducto);
        o.setFoto(nombreArchivoFoto);
        o.setColor(color);
        o.setCS(cantidadS);
        o.setCM(cantidadM);
        o.setCL(cantidadL);
        o.setCXL(cantidadXL);
        o.setCT(cantidadTotal);
        
        productoDAO cargar = new productoDAO();
        String resultado = cargar.cargarOtrosColores(o);
        
        InputStream isFoto = foto.getInputStream();

        File f = new File(this.aEnviar + nombreArchivoFoto);
        FileOutputStream ous = new FileOutputStream(f);
        int dato = isFoto.read();
        while (dato != -1) {
            ous.write(dato);
            dato = isFoto.read();
        }

        out.print(resultado);
       
    }else if(put.equals("false")) {
        String nombre = request.getParameter("nombre");
        String color = request.getParameter("color");
        String stock = request.getParameter("stock");
        String precio = request.getParameter("precio");
        String tipo = request.getParameter("tipo");
        String talleS = request.getParameter("talleS");
        String talleM = request.getParameter("talleM");
        String talleL = request.getParameter("talleL");
        String talleXL = request.getParameter("talleXL");
        String descripcion = request.getParameter("descripcion");
        
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
        p.setTalleS(talleS);
        p.setTalleM(talleM);
        p.setTalleL(talleL);
        p.setTalleXL(talleXL);
        p.setDescripcion(descripcion);

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
        } else {
            String idProducto = request.getParameter("producto");
            Part foto2 = request.getPart("foto");
            String nombreArchivoFoto = Paths.get(foto2.getSubmittedFileName()).getFileName().toString();

        OtrosColores o = new OtrosColores();
        o.setIdProducto(idProducto);
        o.setFoto(nombreArchivoFoto);
        
        productoDAO cargar = new productoDAO();
        String resultado = cargar.cargarOtrosFoto(o);
        
        InputStream isFoto = foto2.getInputStream();

        File f = new File(this.aEnviar + nombreArchivoFoto);
        FileOutputStream ous = new FileOutputStream(f);
        int dato = isFoto.read();
        while (dato != -1) {
            ous.write(dato);
            dato = isFoto.read();
        }

        out.print(resultado);
       
    }
 }
    
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        PrintWriter out = response.getWriter();

        String idProducto = request.getParameter("producto");
        String color = request.getParameter("color");
        Part foto = request.getPart("foto");
        String nombreArchivoFoto = Paths.get(foto.getSubmittedFileName()).getFileName().toString();

        OtrosColores o = new OtrosColores();
        o.setIdProducto(idProducto);
        o.setFoto(nombreArchivoFoto);
        o.setColor(color);
        
        productoDAO cargar = new productoDAO();
        String resultado = cargar.cargarOtrosColores(o);
        
        InputStream isFoto = foto.getInputStream();

        File f = new File(this.aEnviar + nombreArchivoFoto);
        FileOutputStream ous = new FileOutputStream(f);
        int dato = isFoto.read();
        while (dato != -1) {
            ous.write(dato);
            dato = isFoto.read();
        }

        out.print(resultado);
 
    }
}
