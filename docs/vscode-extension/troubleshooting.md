# Troubleshooting & Support

## Troubleshooting

### Projects Not Detected

* **Check `pom.xml`:** Ensure a valid `pom.xml` exists in your project root.
* **Refresh:** Click **Refresh Projects** in the Korus dashboard.
* **Workspace:** Make sure the project folder is correctly added to your VS Code workspace.

### Build Fails

* **Check Java Installation:**
  Run the following command to ensure Java is accessible:
  ```bash
  java -version
  ```
* **Environment Variables:** Verify that `JAVA_HOME` is correctly set in your environment variables.
* **Maven Wrapper Permissions:**
  If using Linux or macOS, ensure the Maven Wrapper is executable:
  ```bash
  chmod +x mvnw
  ```
* **Syntax Check:** Confirm there are no syntax errors in your `pom.xml` file.

### Project Start Fails

* **Port Availability:** Ensure port **8080** (or your configured port) is available and not in use by another application.
* **Check Logs:** Review the Integrated Terminal for specific error messages.
* **Pre-compile:** Try running a manual build before starting to ensure dependencies are resolved:
  ```bash
  ./mvnw compile
  ```
* **Extension Freeze:** If the extension becomes unresponsive, try restarting VS Code.

-----

## Support

For help, reporting issues, or providing suggestions, please reach out via the following channels:

* **GitHub Issues:** [Report a Bug](https://www.google.com/search?q=%23) *(Insert Link)*
* **GitHub Discussions:** [Join the Discussion](https://www.google.com/search?q=%23) *(Insert Link)*
* **Email:** [korus.framework@gmail.com](mailto:korus.framework@gmail.com)

-----

### Next Step

Would you like me to generate a **"Contribution Guidelines"** section to go along with this support page?