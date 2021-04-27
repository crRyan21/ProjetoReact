import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm"
import firebaseDb from '../firebase';
import '../css/style.css'

const Contacts = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('pessoas').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else {
                setContactObjects({})
            }
        })
    }, [])


    const addOrEdit = obj => {
        if (currentId == '')
            firebaseDb.child('pessoas').push(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        setCurrentId('')
                    }
                }
            )
        else
            firebaseDb.child('pessoas/' + currentId).set(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        setCurrentId('')
                    }
                }
            )
    }

    const onDelete = key => {
        if (window.confirm('Tem certeza que deseja deletar isto?'))
            firebaseDb.child('pessoas/' + key).remove(
                err => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        setCurrentId('')
                    }
                }
            )
    }

    return (
        <section id="content">
            <h1>Cadastro</h1>
            <ContactForm {...({ addOrEdit, currentId, contactObjects })} />

            <table>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Estado Civil</th>
                        <th scope="col">Cpf</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(contactObjects).map(id => {
                            return (

                                <tr key={id}>

                                    <td scope="row">
                                        {contactObjects[id].nome}
                                    </td>
                                    <td>
                                        {contactObjects[id].idade}
                                    </td>
                                    <td>
                                        {contactObjects[id].estadocivil}
                                    </td>
                                    <td>
                                        {contactObjects[id].cpf}
                                    </td>
                                    <td>
                                        {contactObjects[id].cidade}
                                    </td>
                                    <td>
                                        {contactObjects[id].estado}
                                    </td>

                                    <td>
                                        <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                            <i className="fas fa-pencil-alt bluegray"></i>
                                        </a>
                                        <a className="btn text-danger" onClick={() => onDelete(id)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    );
}

export default Contacts;