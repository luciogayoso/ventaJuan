package EntidadDAD;

import conexionDB.Conexion;
import java.sql.Array;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.TreeMap;
import peticiones.Producto;

public class productoDAO {
    
    public List recuperar(){
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        List resultado = new ArrayList<>();
        String sql = "SELECT * FROM `producto` ";
        try {
            prs = reg.prepareStatement(sql);
            ResultSet rs = prs.executeQuery();
             ResultSetMetaData md = rs.getMetaData();
            int columns = md.getColumnCount();
             
            while(rs.next()) {
                HashMap row = new HashMap();
                resultado.add(row);
              
                for (int i = 1; i <= columns; i++) {
                    row.put(md.getColumnName(i),rs.getString(i));
                }
                
            }  return resultado;
            
        } catch (Exception e) {
            resultado.add(e);
            
            return resultado;
        }
    
    }
    
    public String cargarProsucto(Producto p){
    
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        String sql = "INSERT INTO `producto` (`p_codigo`, `p_nombre`, `p_precio`, `p_img`, `p_img_b`,`p_stock`, `p_color`,`p_tipo`) VALUES (?,?,?,?,?,?,?,?);";
        try {
            prs = reg.prepareStatement(sql);
            prs.setString(1,p.getCodigo());
            prs.setString(2,p.getNombre());
            prs.setString(3,p.getPrecio());
            prs.setString(4,p.getFoto());
            prs.setString(5,p.getFotob());
            prs.setString(6,p.getStock());
            prs.setString(7,p.getColor());
            prs.setString(8,p.getTipo());
            prs.execute();
            
            return "Se guardo";
        } catch (Exception e) {
            return e.getMessage();
        }
    
    }
    
    public List mostrarFoto() {
        List<String> resultado = new ArrayList<>();
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        String sql = "SELECT p_img ,p_img_b FROM producto";
        try {
            prs = reg.prepareStatement(sql);
            ResultSet rs = prs.executeQuery();
           
            while (rs.next()) {
                resultado.add(rs.getString("p_img"));
                resultado.add(rs.getString("p_img_b"));
            }
            
            return resultado;
            
        } catch (Exception e) {
            return resultado;
        }
        
    }
 
    public static void main(String[] args) {

//       List hola = recuperar();
//        
//       System.out.println(hola);
        
        
//        List hola = mostrarFoto("vestido.jpg");
//        int h = hola.size();
//        System.out.println(hola);
 //        Producto p = new Producto();
//       
//       p.setCodigo("fkfjdks");
//       p.setNombre("vestido");
//       p.setColor("rojo");
//       p.setPrecio("234");
//       p.setStock("20");
//       p.setFoto("fdsfsd");
//       p.setFotob("fdsada");
//       
//       String resultado = cargarCarrito(p);
//       
//        System.out.println(resultado);
//       
    }
    
    
    
}
