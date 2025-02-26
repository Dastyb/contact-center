# Contact Center Dashboard  
Este proyecto es un **dashboard en tiempo real de un contact center** para gestionar agentes y clientes. La aplicación muestra la lista de agentes con sus estados y el tiempo de espera de los clientes, y **actualiza los datos dinámicamente** gracias a una simulación de WebSockets.  

**Tecnologías utilizadas:**  
- **Next.js** (App Router, SSR/CSR)  
- **React Hooks** (`useState`, `useEffect`, `useContext`)  
- **Context API** (Manejo de estado global)  
- **Axios** (Consumo de API)  
- **WebSockets simulados** (Actualización automática cada 10s)  
- **Tailwind CSS** (Estilos modernos y responsivos)  

---

## Instalación y Configuración  

### **1. Requisitos previos**   
Asegúrate de tener instalado:  
- **Node.js 20+**  
- **NPM o Yarn**  
- **Git**  

### **2. Clonar el repositorio**  
```bash  
git clone https://github.com/Dastyb/contact-center.git  
cd contact-center  
```

### **3. Instalar dependencias**  
```bash  
npm install  
```

### **4. Configurar variables de entorno**  
Crea un archivo `.env` en la raíz del proyecto con:  
```ini  
NEXT_PUBLIC_API_URL=/api/simulate  
```
Esto asegura que la aplicación consuma la API simulada de WebSockets.

### **5. Ejecutar el proyecto**  
```bash  
npm run dev  
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ¿Cómo Funciona la Actualización en Tiempo Real?  
La aplicación **simula un servidor WebSocket** sin necesidad de un backend real.  

1. **Al abrir la app**, los datos iniciales se obtienen desde `/api/simulate`.  
2. **Cada 10 segundos**, el sistema consulta nuevamente `/api/simulate` y genera cambios dinámicos:  
   - Agentes cambian de estado (Disponible, En Llamada, Pausa).  
   - Clientes actualizan su tiempo de espera.  
3. **Estos cambios se envían a la interfaz** a través de WebSockets simulados.  
4. **La lista de agentes y clientes se actualiza automáticamente**, sin necesidad de recargar la página.  

**Resultado:** Un sistema que **simula eventos en tiempo real** de manera eficiente. 

---

## Estructura del Proyecto  

```
/src  
├── /app          # Rutas y páginas principales  
│   ├── /agentes  # Página de agentes  
│   ├── /clientes # Página de clientes  
│   ├── layout.tsx # Estructura general  
│   ├── page.tsx  # Página de inicio  
│  
├── /api          # Simulación de API en Next.js  
│   ├── simulate.ts # Endpoint que genera datos dinámicos  
│  
├── /components   # Componentes reutilizables  
│   ├── AgentCard.tsx  
│   ├── ClientCard.tsx  
│   ├── FilterBar.tsx  
│   ├── Loading.tsx  
│   ├── ErrorMessage.tsx  
│  
├── /context      # Estado global con Context API  
│   ├── AppContext.tsx  
│  
├── /services     # Conexión con la API y WebSockets  
│   ├── api.ts   # Llamadas a la API simulada  
│   ├── socket.ts # Simulación de WebSockets  
│  
└── /hooks        # Hooks personalizados  
   ├── useWebSocket.ts # Hook para eventos en tiempo real   
```

---

## ¿Cómo cambiar a una API real?  
Si en algún momento se proporciona un backend real con WebSockets, solo hay que seguir estos pasos:  

1. **Editar el `.env`** y cambiar la URL de la API real:  
   ```ini  
   NEXT_PUBLIC_API_URL=https://api.example-contact.com  
   ```  
2. **Verificar que `api.ts` use la variable de entorno**  
   ```typescript  
   const API_URL = process.env.NEXT_PUBLIC_API_URL;  
   ```  
3. **Reiniciar el servidor**  
   ```bash  
   npm run dev  
   ```  

**¡Y listo!** La aplicación comenzará a recibir datos en tiempo real desde la API real.  

---

## Contribución  
Si quieres mejorar la aplicación o reportar algún problema:  
1. **Fork** el repositorio.  
2. Crea una rama con tus cambios:  
   ```bash  
   git checkout -b nueva-funcionalidad  
   ```  
3. **Haz commit y push:**  
   ```bash  
   git commit -m "Agregué X funcionalidad"  
   git push origin nueva-funcionalidad  
   ```  
4. Abre un **Pull Request** en GitHub.

---

**Características Clave:**  
 - Manejo de datos dinámicos sin backend real.  
 - Simulación de WebSockets con `/api/simulate`.  
 - Listas actualizadas automáticamente sin recargar la página.  
 - Arquitectura lista para conectarse a un backend real.  

Si tienes alguna duda o sugerencia, **contáctame** 😃.  

---

### **¿Listo para ejecutar?**  
```bash  
npm run dev  
