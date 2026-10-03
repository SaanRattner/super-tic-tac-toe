from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def test():
    return render_template("minigame.html")

@app.route('/1')
def test1():
    return render_template("test.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 5555, debug=True) #open both local and global
                            #this is for me so i called work on the prject without restartong the server everyhtime

