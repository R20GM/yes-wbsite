with open ("data.txt","a") as file:
    username = input("Enter your name")
    userpassword = input("Enter your password")

    file.write(f"{username} {userpassword}\n")

print("Data written to file successfully")
