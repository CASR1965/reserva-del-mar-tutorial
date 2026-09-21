from flask import Flask, render_template

# ============================================================
# CONFIGURACIÓN
# ============================================================

app = Flask(__name__)


# ============================================================
# RUTA PRINCIPAL
# ============================================================

@app.route("/")
def inicio():
    return render_template("index.html")


# ============================================================
# RUTA ALTERNATIVA
# Permite acceder también mediante /index.html
# ============================================================

@app.route("/index.html")
def index_html():
    return render_template("index.html")


# ============================================================
# EJECUCIÓN DEL SERVIDOR
# ============================================================

if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )
    