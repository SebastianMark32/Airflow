const db = require("../util/database");

module.exports = class User{
    constructor(Name,Email,Password,Total_budget){
     this.Name = Name;
     this.Email=Email;
     this.Password = Password;
     this.Total_budget = Total_budget;
    }

    static find(email){
        return db.execute(
            'SELECT * FROM user WHERE email = ?', [email]
        );
    }

    static save(user){
        return db.execute(
            'INSERT INTO user (Username,Email,Password,Total_budget) VALUES (?, ?, ?,0)', [user.name,user.email,user.password]
        );
    }

    static budget(userDetails){
        return db.execute(
<<<<<<< Updated upstream
            'UPDATE user SET Total_budget = ?  WHERE Email = ?', [userDetails.total_budget ,userDetails.email]
=======
            'UPDATE user SET Total_budget = ?  WHERE ID = ?', [userDetails.budget ,userDetails.id]
>>>>>>> Stashed changes
        );
    }

    static fetchBudget(userId)
    {
        return db.execute(
            `SELECT Total_budget FROM user WHERE user = ${userId}`
        );
    }
    
};

