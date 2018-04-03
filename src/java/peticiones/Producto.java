package peticiones;

public class Producto {
   private String id;
   private String codigo;
   private String nombre;
   private String foto;
   private String estado;
   private String fotob;
   private String color;
   private String precio;
   private String stock;
   private String idCarrito;
   private String tipo;
   private String error;
   private String talleS;
   private String talleM;
   private String talleL;
   private String talleXL;
   private String descripcion;


    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getFotob() {
        return fotob;
    }

    public void setFotob(String fotob) {
        this.fotob = fotob;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }

    public String getIdCarrito() {
        return idCarrito;
    }

    public void setIdCarrito(String idCarrito) {
        this.idCarrito = idCarrito;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    /**
     * @return the id
     */
    public String getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * @return the estado
     */
    public String getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(String estado) {
        this.estado = estado;
    }

    /**
     * @return the error
     */
    public String getError() {
        return error;
    }

    /**
     * @param error the error to set
     */
    public void setError(String error) {
        this.error = error;
    }

    /**
     * @return the tipo
     */
    public String getTipo() {
        return tipo;
    }

    /**
     * @param tipo the tipo to set
     */
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    /**
     * @return the talleS
     */
    public String getTalleS() {
        return talleS;
    }

    /**
     * @param talleS the talleS to set
     */
    public void setTalleS(String talleS) {
        this.talleS = talleS;
    }

    /**
     * @return the talleM
     */
    public String getTalleM() {
        return talleM;
    }

    /**
     * @param talleM the talleM to set
     */
    public void setTalleM(String talleM) {
        this.talleM = talleM;
    }

    /**
     * @return the talleL
     */
    public String getTalleL() {
        return talleL;
    }

    /**
     * @param talleL the talleL to set
     */
    public void setTalleL(String talleL) {
        this.talleL = talleL;
    }

    /**
     * @return the talleXL
     */
    public String getTalleXL() {
        return talleXL;
    }

    /**
     * @param talleXL the talleXL to set
     */
    public void setTalleXL(String talleXL) {
        this.talleXL = talleXL;
    }

    /**
     * @return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param descripcion the descripcion to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
