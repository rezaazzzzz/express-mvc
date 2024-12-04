import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
   
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false, 
  }
);

export default User;