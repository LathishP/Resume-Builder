from flask import Flask, render_template, request

app = Flask(__name__)

# Home page
@app.route("/")
def index():
    return render_template("index.html")

# Resume preview page
@app.route("/preview", methods=["POST"])
def preview():
    data = {
        "name": request.form.get("name"),
        "email": request.form.get("email"),
        "phone": request.form.get("phone"),
        "address": request.form.get("address"),
        "objective": request.form.get("objective"),
        "masters": request.form.get("masters"),
        "degree": request.form.get("degree"),
        "inter": request.form.get("inter"),
        "skills": request.form.get("skills"),
        "internships": request.form.get("internships"),
        "Projects": request.form.get("Projects"),
    }

    return render_template("preview.html", data=data)


if __name__ == "__main__":
    app.run(debug=True)
