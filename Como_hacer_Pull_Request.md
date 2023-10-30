# Creación de PULL REQUEST

> **_Nota:_** > _Antes de comenzar nos aseguramos que tenemos en el config de git tu email y tu name_

```bash
git config --list o  git config --global --list
# Para añadirlos :
git config --global user.email "tu_email"
git config --global user.name "tu_nombre_de_github"
```

> _Recuerda usal --global si deseas que dicha configuración esté disponible en todos tus proyectos con git._

---

## Pasos📑

1. Pulsamos en Fork para realizar una copia de un proyecto a mi github personal.

1. Clonamos el repositorio en local con:

   ```bash
    git clone https://github.com/TU_NICK_DE_GITHUB/EjerciciosDWEC_23_24
   ```

1. Creamos una rama para no interferir en la main de partida y nos posicionamos en ella:

   ```bash
     git checkout -b "nombre_de_la_rama"
   ```

1. Nos aseguramos que estamos en la rama :

   ```bash
     git branch
   ```

1. Ahora abrimos con visual studio code y realizamos el ejercicio correspondiente.

1. Cuando hemos realizado nuestra taera añadimos los cambios al `stage area` de nuestra rama.

   ```bash
   git add --all
   ```

1. Realizamos el commit:

   ```bash
   git commit -m "nombre de lo realizado"
   ```

1. Si la rama no está en remoto el siguiente comando comitea en esa rama y si no existe la crea.

   ```bash
   git push origin nombre_rama_a_remoto
   ```

1. Ahora ya en github nos vamos a la rama y pulsamos en `'contribute'` para enviar nuestras propuestas de ejercicios al repositorio con los ejercicios de este curso.

1. Se deben de enviar los ejercicios dentro de carpetas con el número de ejercicio. Por ejemplo creamos una carpeta con el nombre **_ej1_** y dentro el ejercicio resuelto.

---

@IsaíasFL
