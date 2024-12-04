import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';
class User extends Model {}

Product.init(
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
    userid :{
        type:DataTypes.STRING,
    },
    price:{
        type:DataTypes.NUMBER,
    }
  },
  {
    sequelize,
    tableName: 'product',
    timestamps: false, 
  }
);

export default Product;