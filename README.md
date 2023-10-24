## Ejercicios : 💻 Desarrollo Web Entorno Cliente 23_24 🗓️

A través de este repositorio se va a poner a disposición del alumnado, relaciones de ejercicios que se deben de entregar realizando un Pull Request a este repositorio.
En 📁 [este fichero](https://github.com/isaiasfl/EjerciciosDWEC_23_24/blob/main/Ejercicios_asociados_a_cada_alumno_a.md) aparece cada alumno/a con el ejercicio que tiene asociado:

# NOTA IMPORTANTE

- Todos los ejercicios deben de tener una cabecera como la explicada en clase, con vuestro nombre, descripción, etc.
- Todas las funciones deben de estar documentadas.
- Adicionalmente añadir comentarios para clarificar/explicar cuestiones que consideréis relevantes.

___

He realizado una breve explicación de como realizar un PR a este repositorio.

## Crear un Fork de un Repositorio en GitHub

Un "Fork" es una copia de un repositorio en GitHub que puedes utilizar para contribuir al proyecto original o para trabajar en tu propia versión del proyecto. En nuestro caso va a ser una forma de subir los ejercicios que el profesor proponga a cada uno. Para ello ✍

1. Inicia sesión en tu cuenta de GitHub en https://github.com

2. Accede al repositorio que deseas "Fork".

3. En la esquina superior derecha del repositorio, haz clic en el botón "Fork".

4. Selecciona la cuenta o la organización en la que deseas realizar el Fork y, opcionalmente, el nombre del repositorio. Por lo general, puedes dejar el nombre tal como está si deseas conservar el mismo nombre del repositorio original.

5. Haz clic en el botón "Fork" para crear tu copia del repositorio.

¡Listo! Ahora tienes tu propio Fork del repositorio en tu cuenta de GitHub.😸

## Cómo Crear un Pull Request en GitHub

Un "Pull Request" es una forma de proponer cambios (en nuestro caso entregar los ejercicios propuestos) en un repositorio a través de GitHub.

1. Clona tu Fork del repositorio en tu máquina local:

   ```bash
   git clone https://github.com/VUESTRO_NOMBRE/EjerciciosDWEC_23_24.git
   ```

2. Crea una **nueva rama** en la que trabajar. Esto te ayudará a mantener tus cambios separados de la rama principal del proyecto.

   ```bash
   git checkout -b mi-nueva-rama
   ```

3. Realiza los cambios que desees en los archivos.

4. Confirma tus cambios y súbelos a tu Fork en GitHub:

   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push origin mi-nueva-rama
   ```

5. Visita tu Fork en GitHub y verás una notificación que te permite crear un Pull Request basado en la rama que acabas de empujar.

6. Haz clic en el botón "Compare & pull request".

7. Proporciona una descripción detallada de los cambios que has realizado en el Pull Request y haz clic en "Create pull request". En esa descripción, indica claramente los ejercicios que has realizado Relacion1_ejercicio1, etc.

8. El 😎 propietario del repositorio original revisará tus cambios y, si son aceptados, los fusionará en el proyecto principal.

🏆 ¡Felicidades! Has creado un Pull Request en GitHub. 👏 👏
