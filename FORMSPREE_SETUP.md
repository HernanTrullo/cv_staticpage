# Configuración de Formspree para el Formulario de Contacto

## 📋 Pasos para activar el formulario

### 1. Registrarse en Formspree

1. Ve a [https://formspree.io/](https://formspree.io/)
2. Haz clic en "Sign Up" (Registrarse)
3. Puedes usar:
   - Tu email
   - Cuenta de GitHub
   - Cuenta de Google

### 2. Crear un nuevo formulario

1. Una vez dentro, haz clic en **"+ New Form"**
2. Dale un nombre a tu formulario (ejemplo: "Portfolio Contact Form")
3. Formspree te dará un **Form ID** único que se ve así:
   ```
   https://formspree.io/f/xyzabc123
   ```
   donde `xyzabc123` es tu ID único

### 3. Actualizar el código

Abre el archivo `index.html` y busca esta línea (aproximadamente línea 449):

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Reemplaza `YOUR_FORM_ID` con tu ID real. Por ejemplo:

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xyzabc123" method="POST">
```

### 4. ¡Listo! 🎉

Ahora cuando alguien envíe el formulario:
- ✅ Recibirás un email en tu bandeja de entrada
- ✅ Verás los mensajes en tu panel de Formspree
- ✅ El usuario verá un mensaje de confirmación

## 📊 Plan Gratuito de Formspree

El plan gratuito incluye:
- ✅ 50 envíos por mes
- ✅ Almacenamiento ilimitado de mensajes
- ✅ Notificaciones por email
- ✅ Sin marca de agua
- ✅ Protección contra spam

## ⚙️ Configuraciones Adicionales (Opcionales)

### Configurar email de notificación

1. En Formspree, ve a tu formulario
2. Click en **Settings** → **Email Notifications**
3. Cambia el email donde quieres recibir las notificaciones

### Activar protección anti-spam

1. En Settings de tu formulario
2. Activa **reCAPTCHA** (requiere configuración de Google)

### Personalizar mensaje de confirmación

En el archivo `index.html`, puedes cambiar esta línea para redirigir a una página de gracias:

```html
<input type="hidden" name="_next" value="https://tu-sitio.com/gracias.html">
```

## 🧪 Probar el formulario

1. Abre tu `index.html` en el navegador
2. Llena el formulario de contacto
3. Haz clic en "Enviar Mensaje"
4. La primera vez, Formspree pedirá confirmación de email
5. Confirma tu email y ¡ya está funcionando!

## 🔧 Solución de Problemas

### No recibo emails
- Verifica que confirmaste tu email en Formspree
- Revisa la carpeta de spam
- Verifica que el Form ID sea correcto

### Error al enviar
- Verifica tu conexión a internet
- Asegúrate de haber reemplazado `YOUR_FORM_ID` con tu ID real
- Abre la consola del navegador (F12) para ver errores

### Límite de 50 mensajes alcanzado
- Considera actualizar al plan Pro ($10/mes)
- O usa otro servicio como Web3Forms (250 envíos gratis)

## 📞 Soporte

- Documentación: [https://help.formspree.io/](https://help.formspree.io/)
- Soporte: [https://formspree.io/support](https://formspree.io/support)

---

**Nota**: El formulario está configurado para funcionar con AJAX, por lo que el usuario no será redirigido a otra página. Verá un mensaje de éxito/error directamente en la misma página.
