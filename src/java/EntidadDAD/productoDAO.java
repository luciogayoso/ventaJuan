package EntidadDAD;

import conexionDB.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import peticiones.Carrito;
import peticiones.OtrosColores;
import peticiones.Producto;

public class productoDAO {
    
    public List recuperar(){
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        List resultado = new ArrayList<>();
        String sql = "SELECT id_producto , p_nombre , p_img , p_color FROM `producto` ";
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
    
    public List recuperarProducto(String s){
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        List resultado = new ArrayList<>();
        String sql = "SELECT * FROM `producto` WHERE id_producto = ?";
        try {
            prs = reg.prepareStatement(sql);
            prs.setString(1, s);
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
        String sql = "INSERT INTO `producto` ( `p_codigo`, `p_nombre`, `p_precio`, `p_img`, `p_img_b`, `p_stock`, `p_color`, `p_tipo`, `p_talleS`, `p_talleM`, `p_talleL`, `p_talleXL`, `p_despcripcion`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
            prs.setString(9,p.getTalleS());
            prs.setString(10,p.getTalleM());
            prs.setString(11,p.getTalleL());
            prs.setString(12,p.getTalleXL());
            prs.setString(13,p.getDescripcion());
            prs.execute();
            
            return "Se guardo";
        } catch (Exception e) {
            return e.getMessage();
        }
    
    }
    
     public String cargarOtrosColores(OtrosColores p){
    
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        String sql = "INSERT INTO `otroscolores` (`id_producto`, `o_img`, `o_color`) VALUES (?,?,?);";
        try {
            prs = reg.prepareStatement(sql);
            prs.setString(1,p.getIdProducto());
            prs.setString(2,p.getFoto());
            prs.setString(3,p.getColor());
            prs.execute();
            
            return "Se guardo";
        } catch (Exception e) {
            return e.getMessage();
        }
    
    }
     
      public String cargarOtrosFoto(OtrosColores p){
    
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        String sql = "INSERT INTO `otroscolores` (`id_producto`, `o_img`, `o_color`) VALUES (?,?,null);";
        try {
            prs = reg.prepareStatement(sql);
            prs.setString(1,p.getIdProducto());
            prs.setString(2,p.getFoto());
            prs.execute();
            
            return "Se guardo";
        } catch (Exception e) {
            return e.getMessage();
        }
    
    }
      
       public String cargarCarrito(Carrito c){
    
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        String sql = "INSERT INTO `carrito` (`id_usuario`, `id_producto`, `c_talle`, `c_cantidad`) VALUES (?,?,?,?)";
        try {
            prs = reg.prepareStatement(sql);
            prs.setString(1,c.getIdUsuario());
            prs.setString(2,c.getIdProducto());
            prs.setString(3,c.getTalle());
            prs.setString(4,c.getCantidad());
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
   
    public List recuperarCarritoIdPro(String id){
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        List resultado = new ArrayList<>();
        String sql = "SELECT id_producto , id_carrito , c_talle , c_cantidad FROM  carrito WHERE id_usuario = ?";
        try {
            prs = reg.prepareStatement(sql);
            prs.setString(1, id);
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
    
    
        public List recuperarProductoCarrito(String id){
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        List resultado = new ArrayList<>();
        String sql = "SELECT id_producto ,  p_nombre , p_img , p_precio FROM `producto` WHERE id_producto = ?";
        try {
            prs = reg.prepareStatement(sql);
            prs.setString(1, id); 
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
        
  public String deleteProductoCarrito(String id){
        Conexion con = new Conexion();
        Connection reg = con.getConnection();
        PreparedStatement prs = null;
        String sql = "DELETE FROM carrito WHERE id_carrito = ?";
        try {
            prs = reg.prepareStatement(sql);
            prs.setString(1, id); 
            prs.executeUpdate();
            
            return "Se borro corectamente";
        } catch (Exception e) {
            return e.getMessage();
        }
    
    }      
        
}
