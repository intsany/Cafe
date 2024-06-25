const { request, response } = require('express')
const md5 = require('md5')
const menunModel = require('../models/index').menu
const Op = require('sequelize').Op

exports.getAllMenu = async (request, response) => {
    let menu = await menuModel.findAll()
    return response.json({
        succes: true,
        data: menu,
        message: 'All menu have been loaded'
    })
}

exports.findMenu = async (request, response) => {
    let keyword = request.body.keyword

    let menu = await menuAdmin.findAll({
        where: {
            [Op.or]: [
                { id: { [Op.substring]: keyword } },
                { id_menu: { [Op.substring]: keyword } },
                { nama_menu: { [Op.substring]: keyword } },
                { jenis: { [Op.substring]: keyword } },
                { deskripsi: { [Op.substring]: keyword } },
                { gambar: { [Op.substring]: keyword } },
                { harga: { [Op.substring]: keyword } },
            ]
        }
    })

    return response.json({
        succes: true,
        data: menu,
        message: 'All Menu have been loaded'
    })
}


exports.addMenu = (request, response) => {
    let newMenu = {
        nama_menu: request.body.nama_menu,
        jenis: request.body.jenis,
        deskripsi: request.body.deskripsi,
        gambar: request.body.gambar,
        harga: request.body.harga
    }
    menuModel.create(newMenu)
        .then (result => {
            return response.json({
                success: true, 
                data: newMenu,
                message: `New menu has been inserted`
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        }) 
}

exports.updateMenu = (request, response) => {
    let dataMenu = {
        id: request.body.id,
        id_menu: request.body.id_menu,
        nama_menu: request.body.nama_menu,
        jenis: request.body.jenis,
        deskripsi: request.body.deskripsi,
        gambar: request.body.gambar,
        harga: request.body.harga
    }

    let idMenu = request.params.idMenu

    menuModel.update(dataMenu, { where: { id: idMenu } })
        .then(result => {
            return response.json({
                succes: true,
                message: 'Data menu has been updated'
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        })
}

exports.deleteMenu = (request, response) => {
    let idMenu = request.params.id

    menuModel.destroy({ where: { id: idMenu } })
        .then(result => {
            return response.json({
                succes: true,
                message: 'Data menu has been updated'
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        })
}