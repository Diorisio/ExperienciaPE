module.exports = (sequelize, dataTypes) => {
    let alias = 'Experiencia';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        Titulo: {
            type: dataTypes.STRING,
            allowNull: false
        },
        Descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        Imagen: {
            type: dataTypes.STRING,
        },
        SalaInteractiva: {
            type: dataTypes.STRING,
            allowNull: false
        }
        
    };
    let config = {
        tableName:"Experiencia",
        timestamps: false,
        deletedAt: false
    }
    const Experiencia = sequelize.define(alias, cols, config);

    return Experiencia
};