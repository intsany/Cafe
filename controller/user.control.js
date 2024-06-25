// const express = require('express')
const md5 = require('md5')
const userModel = require('../models/index').user
const Op = require('sequelize').Op
const path = require(`path`)
const fs = require(`fs`)

exports.getAllUser = async (request, response) => {
    let user = await userModel.findAll()
    return response.json({
        succes: true,
        data: user,
        message: 'All user have been loaded'
    })
}

exports.findUser = async (request, response) => {
    let keyword = request.body.keyword

    let user = await userAdmin.findAll({
        where: {
            [Op.or]: [
                { id: { [Op.substring]: id } },
                { id_user: { [Op.substring]: id_user } },
                { nama_user: { [Op.substring]: nama_user } },
                { role: { [Op.substring]: role } },
                { username: { [Op.substring]: username } },
                { password: { [Op.substring]: nama_user } },
            ]
        }
    })

    return response.json({
        succes: true,
        data: user,
        message: 'All User have been loaded'
    })
}


exports.addUser = (request, response) => {
    let newUser = {
        // id: request.body.id,
        // id_user: request.body.id_user,
        nama_user: request.body.nama_user,
        role: request.body.role,
        username: request.body.username,
        password: md5(request.body.password)
    }
    userModel.create(newUser)
        .then (result => {
            return response.json({
                success: true, 
                data: newUser,
                message: `New user has been inserted`
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        }) 
}

exports.updateUser = (request, response) => {
    let dataUser = {
        id: request.body.id,
        id_user: request.body.id_user,
        nama_user: request.body.nama_user,
        role: request.body.role,
        username: request.body.username,
        password: md5(request.body.password)
    }

    let idUser = request.params.idUser

    userModel.update(dataUser, { where: { id: idUser } })
        .then(result => {
            return response.json({
                succes: true,
                message: 'Data user has been updated'
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        })
}

exports.deleteUser = (request, response) => {
    let idUser = request.params.id

    userModel.destroy({ where: { id: idUser } })
        .then(result => {
            return response.json({
                succes: true,
                message: 'Data user has been updated'
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        })
}