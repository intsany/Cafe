const { request, response } = require('express')
const md5 = require('md5')
const mejaModel = require('../models/index').meja
const Op = require('sequelize').Op

exports.getAllMeja = async (request, response) => {
    let meja = await mejaModel.findAll()
    return response.json({
        succes: true,
        data: meja,
        message: 'All meja have been loaded'
    })
}

exports.findMeja = async (request, response) => {
    let keyword = request.body.keyword

    let meja = await mejaAdmin.findAll({
        where: {
            [Op.or]: [
                { id: { [Op.substring]: id } },
                { id_meja: { [Op.substring]: id_meja } },
                { nomor_meja: { [Op.substring]: nomor_meja } }
            ]
        }
    })

    return response.json({
        succes: true,
        data: meja,
        message: 'All Meja have been loaded'
    })
}


exports.addMeja = (request, response) => {
    let newMeja = {
        id: request.body.id,
        id_meja: request.body.id_meja,
        nomor_meja: request.body.nama_nomor_meja,
    }
    mejaModel.create(newMeja)
        .then (result => {
            return response.json({
                success: true, 
                data: newMeja,
                message: `New meja has been inserted`
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        }) 
}

exports.updateMeja = (request, response) => {
    let dataMeja = {
        id: request.body.id,
        id_meja: request.body.id_meja,
        nomor_meja: request.body.nama_nomor_meja,
    }

    let idMeja = request.params.idMeja

    mejaModel.update(dataMeja, { where: { id: idMeja } })
        .then(result => {
            return response.json({
                succes: true,
                message: 'Data meja has been updated'
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        })
}

exports.deleteMeja = (request, response) => {
    let idMeja = request.params.id

    mejaModel.destroy({ where: { id: idMeja } })
        .then(result => {
            return response.json({
                succes: true,
                message: 'Data meja has been updated'
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        })
}