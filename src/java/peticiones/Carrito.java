package peticiones;

public class Carrito {
    private String idUsuario;
    private String idProducto;
    private String talle;
    private String cantidad;

    public String getIdUsuario() {
        return idUsuario;
    }

   
    public void setIdUsuario(String idUsuario) {
        this.idUsuario = idUsuario;
    }


    public String getIdProducto() {
        return idProducto;
    }

 
    public void setIdProducto(String idProducto) {
        this.idProducto = idProducto;
    }

    /**
     * @return the talle
     */
    public String getTalle() {
        return talle;
    }

    /**
     * @param talle the talle to set
     */
    public void setTalle(String talle) {
        this.talle = talle;
    }

    /**
     * @return the cantidad
     */
    public String getCantidad() {
        return cantidad;
    }

    /**
     * @param cantidad the cantidad to set
     */
    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }
}
