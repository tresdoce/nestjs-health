<div align="center">
    <img alt="nestjs-health" width="250" height="auto" src="https://camo.githubusercontent.com/c704e8013883cc3a04c7657e656fe30be5b188145d759a6aaff441658c5ffae0/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f5f746578742e737667" />
    <h3>NestJS - Health Checks</h3>
</div>

<p align="center">
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Node&message=v14.15.4&labelColor=339933&color=757575&logoColor=FFFFFF&logo=Node.js" alt="Node.js"/>
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Npm&message=v6.14.10&labelColor=CB3837&logoColor=FFFFFF&color=757575&logo=npm" alt="Npm"/>
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=NestJs&message=v8.2.0&labelColor=E0234E&logoColor=FFFFFF&color=757575&logo=Nestjs" alt="NestJs"/>
    <img alt="GitHub license" src="https://img.shields.io/github/license/tresdoce/nestjs-health?style=flat"><br/>
    <img alt="GitHub Workflow Status" src="https://github.com/tresdoce/nestjs-health/actions/workflows/master.yml/badge.svg?branch=master">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/tresdoce/nestjs-health?logoColor=FFFFFF&logo=Codecov&labelColor=#F01F7A">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=tresdoce_nestjs-health&metric=alert_status" alt="sonarcloud">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/tresdoce/nestjs-health">
    <br/> 
</p>

Esta dependencia está pensada para ser utilizada en [NestJs Starter](https://github.com/rudemex/nestjs-starter), o 
cualquier proyecto que utilice una configuración centralizada, siguiendo la misma arquitectura del starter.

## Glosario

- [🥳 Demo](https://rudemex-nestjs-starter.herokuapp.com/docs)
- [📝 Requerimientos básicos](#basic-requirements)
- [🛠️ Instalar dependencia](#install-dependencie)
- [⚙️ Configuración](#configurations)
- [📤 Commits](#commits)
- [📄 Changelog](./CHANGELOG.md)
- [📜 License MIT](license.md)

---

<a name="basic-requirements"></a>

## 📝 Requerimientos básicos

- [NestJs Starter](https://github.com/rudemex/nestjs-starter)
- Node.js v14.15.4 or higher ([Download](https://nodejs.org/es/download/))
- NPM v6.14.10 or higher
- NestJS v8.2.0 or higher ([Documentación](https://nestjs.com/))

<a name="install-dependencie"></a>

## 🛠️ Instalar dependencia

```
npm install @tresdoce/nestjs-health
```

<a name="configurations"></a>

## ⚙️ Configuración

Para excluir los paths `/liveness` y `/readiness` hay que ajustar el `setGlobalPrefix` agregando los options exclude que exporta la dependencia.

```typescript
// .src/main.ts

import { controllersExcludes } from '@tresdoce/nestjs-health';

app.setGlobalPrefix(`${server.context}`, {
    exclude: [...controllersExcludes],
});
```

```typescript
// .src/app.module.ts
import { HealthModule } from '@tresdoce/nestjs-health';
import { config } from './config';

@Module({
    ...,
    imports: [
        HealthModule.register(config()),
    ],
    ...,
})
export class AppModule {}
```

<a name="commits"></a>

## 📤 Commits

Para los mensajes de commits se toma como
referencia [`conventional commits`](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary).

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

- **type:** chore, docs, feat, fix, refactor (más comunes)
- **scope:** indica la página, componente, funcionalidad
- **description:** comienza en minúsculas y no debe superar los 72 caracteres.

## 📄 Changelog

All notable changes to this package will be documented in [Changelog](./CHANGELOG.md) file.

---

<div align="center">
    <a href="mailto:mdelgado@tresdoce.com.ar" target="_blank" alt="Send an email">
        <img src="./.readme-static/logo-mex-red.svg" width="120" alt="Mex" />
    </a><br/>
    <p>Made with ❤</p>
</div>
