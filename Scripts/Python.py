import os

def signUp(userName, password, email):
    path = os.getcwd()
    path = path.split("/")
    path.pop()
    path = path.join("/")
    for root, dirs, files in os.walk(path):
        if userName in files:
            print ("UserName Taken!")
        else:
            os.mkdir(f"{path}{userName}")
            path = f"{path}{userName}"
            userInfo = open(path, "w")
            userInfo.write(f"{userName}\n{password}\n{email}")