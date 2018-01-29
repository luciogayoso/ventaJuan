package Servicios;

import EntidadDAD.usuarioDAO;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import peticiones.Cliente;
import validar.ValidarIngresosCliente;


@WebServlet(name = "Registrarse", urlPatterns = {"/Registrarse"})
public class Registrarse extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
      
       PrintWriter out = response.getWriter();
       String datosResividos = request.getParameter("peticion");
       Gson gson = new Gson();
       Cliente login = gson.fromJson(datosResividos, Cliente.class);
       usuarioDAO logear = new usuarioDAO();
       List<String> resultado = logear.logear(login);
        if (resultado.size() > 0) {
       String id = resultado.get(0);
       String nombre = resultado.get(1);
       String clave = resultado.get(2);
        
        out.print(id +" "+ nombre +" "+ clave +" "); 
        }else {
          out.print("Este usuario no existe");
        }
}


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
       PrintWriter out = response.getWriter();
       String datosResividos = request.getReader().readLine();
       Gson gson = new Gson();
       Cliente registrar = gson.fromJson(datosResividos, Cliente.class);
       usuarioDAO ingreso = new usuarioDAO();
       ValidarIngresosCliente validar = new ValidarIngresosCliente();
       List<String> existe = ingreso.logear(registrar);
       
        if (existe.size() < 1) {
           String validado = validar.validarClientes(registrar);
        
            if (validado.equals("todo salio bien")) {
             String resultado = ingreso.ingresar(registrar);
       
            out.print(resultado);            
            }
            if (validado.equals("nombre invalido")) {
                out.print("Su nombre no debe incluir caracteres especiales");
            }
            if (validado.equals("apellido invalido")) {
                out.print("Su apellido no debe incluir caracteres especiales");
            }
            if (validado.equals("mail invalido")) {
                out.print("Su mail es incorrecto");
            }
            if (validado.equals("nombre de usuario invalido")) {
                out.print("Su nombre de usuario no debe incluir caracteres especiales");
            }
        }else {
        out.print("Este usuario ya existe");
        }
    }
}