# Rediseño del Blog de midudev

Bienvenido al proyecto de rediseño del Blog de midudev. Este proyecto tiene como objetivo mejorar la experiencia de usuario y la apariencia del blog utilizando tecnologías modernas como Astro, Tailwind CSS y TypeScript. Valoramos la colaboración de la comunidad y estamos emocionados de trabajar juntos para hacer de este proyecto un éxito con amor.

[Diseño de Figma](<https://www.figma.com/file/BEPJkWoKbHN2yzb3iZinqW/%F0%9F%9A%A7(wip)-midu.dev-v2.0?type=design&node-id=10%3A14&mode=design&t=H3qLztvluGbSxj8R-1>)

## Tabla de Contenidos

- Descripción.
- Roadmap.
- Stack Tecnológico.
- Cómo correr el proyecto.
- Estructura del proyecto.
- Cómo contribuir.

## Roadmap

[] Mobile responsive.
[] 100/100 Lighthouse performance.
[] SEO-friendly with canonical URLs and OpenGraph data
[] Sitemap support
[] RSS Feed support
[] Image optimization
[] Light mode
[] Draft mode
[] Copy code block
[] Post Sharing Options

[] Página de Agenda
[] Sección Redes Sociales (home)
[] Sección últimas clases

## Stack

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Husky](https://typicode.github.io/husky/)

## Deploy

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:3000`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run lint`      | Run Eslint                                       |
| `lint:fix`          | Run Eslint Fix                                   |
| `format`            | Prettier Formatter                               |
| `commitlint`        | Check Commit linter                              |
| `prepare`           | Prepare husky                                    |

## Estructura

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

## Cómo contribuir

Invitamos a todos los miembros del servidor de MiduDev a contribuir al proyecto. Para hacerlo, sigue estos pasos:

- Encuentra una issue abierta que te interese en el repositorio del proyecto.
- Comenta en la issue tu interés en trabajar en ella y solicita que se te asigne.
- Una vez que se te asigne la issue, trabaja en ella y crea un pull request cuando hayas completado la tarea.
- Nuestro equipo revisará tu pull request y lo fusionará si cumple con los estándares de calidad.

\*Si consideras que se puede hacer una "**Feature**" que no está listada en las Issues. Podés abrir una nueva e indicar detalladamente el por qué. Recordá utilizar correctamente los **LABELS\***
