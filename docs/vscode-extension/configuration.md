Here is the `configuration.md` content formatted into a clean, structured Markdown file.

-----

# Configuration & Requirements

## Maven Wrapper

The Korus VS Code extension utilizes the **Maven Wrapper (`mvnw`)** to execute build tasks.

For the extension to function correctly, your project **must** contain the following file structure:

```text
project-root/
├── mvnw
├── mvnw.cmd
└── .mvn/
    └── wrapper/
        └── maven-wrapper.properties
```

> **Note:** If these files are missing, the extension will be unable to run builds or execute lifecycle commands.

-----

## Java Requirements

The Korus Framework requires **Java 17 or higher**.

### Windows

Set the `JAVA_HOME` environment variable via the command line:

```cmd
setx JAVA_HOME "C:\Program Files\Java\jdk-21"
```

### macOS / Linux

Export `JAVA_HOME` in your shell profile (e.g., `.bashrc` or `.zshrc`):

```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk
```

### Verify Installation

To confirm your installation is correct, run:

```bash
java -version
```

-----

## VS Code Requirements

To use the Korus extension, ensure your environment meets the following criteria:

* **Visual Studio Code:** Version **1.80.0** or higher.
* **Supported Operating Systems:**
    * Windows
    * macOS
    * Linux

**Recommendation:**
For the best development experience, ensure the official **Java** and **Maven** extensions for VS Code are also installed.

-----

### Next Step

Would you like me to merge this `configuration.md` and the previous `troubleshooting.md` into a single, cohesive **README.md** file with a main Table of Contents?