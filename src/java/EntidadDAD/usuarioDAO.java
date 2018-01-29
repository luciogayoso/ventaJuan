package EntidadDAD;

import com.mysql.jdbc.Connection;
import conexionDB.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import peticiones.Cliente;

public class usuarioDAO {
   
   public String ingresar(Cliente c){
       Conexion con = new Conexion();
       Connection reg = con.getConnection();
       PreparedStatement prs = null;
       String sql = "INSERT INTO `usuario` ( `u_nombre`, `u_apellido`, `u_mail`, `u_nombreUsuario`, `u_clave`, `u_tipo`) VALUES (?,?,?,?,?,?)";
       try {
           prs = reg.prepareStatement(sql);
           prs.setString(1, c.getNombre());
           prs.setString(2, c.getApellido());
           prs.setString(3, c.getMail());
           prs.setString(4, c.getNombreUsurio());
           prs.setString(5, c.getClave());
           prs.setString(6, c.getTipo());
           
           prs.execute();
           
           return "FUNCIONO";
       } catch (Exception e) {
           return e.getMessage();
       }
   } 
   
   public List logear(Cliente c){
   Conexion con = new Conexion();
   Connection reg = con.getConnection();
   PreparedStatement prs = null;
   List<String> resultado = new ArrayList<>();
   String sql = "SELECT u_id , u_nombreUsuario , u_clave FROM `usuario` WHERE u_nombreUsuario = ?";
       try {
           prs = reg.prepareStatement(sql);
           prs.setString(1, c.getNombreUsurio());
           ResultSet rs = prs.executeQuery();
           if (rs.next()) {
                resultado.add(rs.getString(1));
                resultado.add(rs.getString(2));
                resultado.add(rs.getString(3));
           }
       
         return resultado;
       } catch (Exception e) {
           resultado.add(e.getMessage());
           
          return resultado;
       }
   }
    
}
