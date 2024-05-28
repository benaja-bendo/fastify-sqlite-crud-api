import SQLiteDB from "../db/SQLiteDB";
import {Sequelize} from 'sequelize';
import {User} from "../models/userModel";

class UserService {
    private db: Sequelize | null = null;

    constructor() {
        const dbInstance = SQLiteDB.getInstance();
        this.db = dbInstance.getDB();
    }

    async getAllUsers() {
        try {
            return await User.findAll();
        } catch (error) {
            console.log('une erreur est survenue lors de la récupération des utilisateurs', error);
            return [];
        }
    }

    getUserById(userId: number) {
        // Logique pour récupérer un utilisateur par ID depuis la base de données
    }

    async createUser(userData: any) {
        try {
            const user = await User.create(userData);
            await user.save();
            return user;
        } catch (error) {
            console.log('Une erreur est survenue lors de la création de l\'utilisateur', error);
            return null;
        }
    }

    updateUser(userId: number, userData: any) {
        // Logique pour mettre à jour un utilisateur dans la base de données
    }

    deleteUser(userId: number) {
        // Logique pour supprimer un utilisateur de la base de données
    }
}

export default new UserService();
