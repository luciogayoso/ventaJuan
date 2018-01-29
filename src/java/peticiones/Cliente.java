package peticiones;

public class Cliente {
  private String nombre;
  private String apellido;
  private String mail;
  private String nombreUsurio;
  private String clave;
  private String tipo;

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return the apellido
     */
    public String getApellido() {
        return apellido;
    }

    /**
     * @param apellido the apellido to set
     */
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    /**
     * @return the mail
     */
    public String getMail() {
        return mail;
    }

    /**
     * @param mail the mail to set
     */
    public void setMail(String mail) {
        this.mail = mail;
    }

    /**
     * @return the nombreUsurio
     */
    public String getNombreUsurio() {
        return nombreUsurio;
    }

    /**
     * @param nombreUsurio the nombreUsurio to set
     */
    public void setNombreUsurio(String nombreUsurio) {
        this.nombreUsurio = nombreUsurio;
    }

    /**
     * @return the clve
     */
    public String getClave() {
        return clave;
    }

    /**
     * @param clve the clve to set
     */
    public void setClave(String clve) {
        this.clave = clave;
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
  
}
