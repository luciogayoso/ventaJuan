package validar;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import peticiones.Cliente;

public class ValidarIngresosCliente {
 
    public static boolean regMail(String s){
    Pattern pat = Pattern.compile("[A-Za-z]+@[a-z]+\\.[a-z]+");
     Matcher mat = pat.matcher(s);
     boolean prueva = mat.find();
     if (prueva) {
         return prueva;
     } else {
         return prueva;
     }
    }
    
    public static boolean regular(String s){
    Pattern pat = Pattern.compile("[^A-Za-z]");
     Matcher mat = pat.matcher(s);
     boolean prueva = mat.find();
     if (prueva) {
         return prueva;
     } else {
         return prueva;
     }
    }
    
    public static String validarClientes(Cliente c){
    
    String nombre = c.getNombre();
    String apellido = c.getApellido();
    String mail = c.getMail();
    String nombreUsuario = c.getNombreUsurio();
   
       boolean bNombre = regular(nombre);
        if (bNombre) {
            return "nombre invalido";
        }
       boolean bApellido = regular(apellido);
        if (bApellido) {
            return "apellido invalido";
        }
       boolean bMail = regMail(mail);
        if (bMail == false) {
            return "mail invalido";
        }
       boolean bNombreUsuario = regular(nombreUsuario);
        if (bNombreUsuario) {
            return "nombre de usuario invalido";
        }
      return "todo salio bien";
    }
    
//    public static void main(String[] args) {
//        Cliente c = new Cliente();
//        c.setNombre("fjdskla");
//        c.setApellido("juares");
//        c.setMail("luciogayoso@gmail.com");
//        c.setNombreUsurio("jode");
//        String resul = validarClientes(c);
//        
//        System.out.println(resul);
//    }
}
