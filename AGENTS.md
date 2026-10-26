# Guía del proyecto

## NotebookLM MCP

- El servidor MCP configurado en Codex usa `notebooklm-py[mcp]` mediante `uv` y el almacén de certificados de Windows (`--system-certs` y `truststore`). No sustituirlo por el paquete distinto `notebooklm-mcp`.
- Iniciar sesión en NotebookLM dentro de Edge no basta por sí solo: el conector mantiene su propio perfil local en `%USERPROFILE%\.notebooklm\profiles\default\`.
- Si `notebook_list` responde `unauthenticated` o `AUTH: Authentication expired`, renovar la sesión desde ese mismo paquete con el flujo de navegador de Edge. Ejemplo para PowerShell desde la carpeta del proyecto:

  ```powershell
  $env:UV_CACHE_DIR = Join-Path (Get-Location).Path '.uv-cache-notebooklm'
  uv run --system-certs --with truststore --with 'notebooklm-py[mcp,browser]==0.8.5' -- python -c "import sys; from notebooklm.notebooklm_cli import main; sys.argv=['notebooklm','login','--browser','msedge','--fresh','--browser-timeout','300']; main()"
  ```

- El comando abre un perfil de Edge propio de NotebookLM y espera hasta cinco minutos. Completar allí el acceso de Google; el CLI guarda el estado en `storage_state.json` automáticamente. `--fresh` elimina el perfil de navegador de autenticación en caché del MCP antes de iniciar uno limpio; no elimina el perfil habitual de Edge.
- No copiar, imprimir ni guardar cookies, contraseñas o tokens en el proyecto, el historial o este archivo. Evitar extraer cookies del perfil habitual de Chrome: puede faltar `__Secure-1PSIDTS` por el cifrado ligado a la aplicación.
- Después del login, comprobar primero `server_info` y luego `notebook_list`. La conexión solo se considera recuperada cuando se pueden listar cuadernos. Si el proceso del MCP ya está activo, probar la herramienta otra vez antes de reiniciar Codex.
- En esta sesión (26-10-2026) se recuperó el acceso con el perfil limpio de Edge; `server_info`, `notebook_list`, `source_list` y `chat_ask` funcionaron. Se encontraron 279 cuadernos y «Guía de Viaje a Okinawa» con 34 fuentes. Tras cualquier nuevo login, volver a verificar las herramientas antes de dar la conexión por buena.
- La planificación de Okinawa de la web debe basarse primero en ese cuaderno; conservar los enlaces oficiales y señalar fechas, tarifas y condiciones que haya que reconfirmar para 2028.
