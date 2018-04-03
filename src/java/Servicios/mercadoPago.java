package Servicios;


import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.codehaus.jettison.json.JSONObject;
import com.mercadopago.MP;
import java.util.ArrayList;
import java.util.Collection;
import java.util.TreeMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;

@WebServlet(name = "mercadoPago", urlPatterns = {"/mercadoPago"})
public class mercadoPago extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    
    }

   
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
      
       PrintWriter out = response.getWriter();
       String datos = request.getReader().readLine(); 
       String resultado = "";
       Double precioTotal = 0.00;
       Integer cantidadTotal = 0;
       
        Gson gson = new Gson();
       
        JSONArray jsonarray;
        try {
            jsonarray = new JSONArray(datos);
        
        for (int i = 0; i < jsonarray.length(); i++) {
    JSONObject jsonobject = jsonarray.getJSONObject(i);
            String nombre = jsonobject.getString("nombre");
            String precio = jsonobject.getString("precio");
            String talle = jsonobject.getString("talle");
            String cantidad = jsonobject.getString("cantidad");
            
            precioTotal += Double.parseDouble(precio);
            cantidadTotal += Integer.parseInt(cantidad);
            
            resultado  += i+1 +"-"+ nombre +" $ "+ precio +" talle "+ talle +" cantidad "+ cantidad +" ";
        }
  
        String preciotot = precioTotal.toString();
        
        
        MP mp = new MP("577722203307587", "rD508DSZg2vVeWcIvn0kyqNSCQJ51Xab");
    

	String preferenceData = "{'items':"+
		"[{"+
			"'title':"+ resultado +","+
			"'quantity':1,"+
			"'picture_url': 'img/CONJUNTONEGRO.jpg',"+
                        "'currency_id':'ARS',"+
			"'unit_price':"+ precioTotal +","+
		"}],"+
        "}";

	JSONObject preference = mp.createPreference(preferenceData);
        String initPoint = preference.getJSONObject("response").getString("init_point");

        
        out.print(initPoint);
        } catch (JSONException ex) {
            Logger.getLogger(mercadoPago.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(mercadoPago.class.getName()).log(Level.SEVERE, null, ex);
        } 
    }

}
