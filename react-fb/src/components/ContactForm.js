import React, { useState, useEffect } from 'react';
import '../css/style.css'



const ContactForm = (props) => {
    const InitialFieldValues = {
        nome: '',
        idade: '',
        estadocivil: '',
        cpf: '',
        cidade: '',
        estado: ''

    }

    var [values, setValues] = useState(InitialFieldValues)

    useEffect(() => {
        if (props.currentId == '') {
            setValues({
                ...InitialFieldValues
            })
        }
        else {
            setValues({
                ...props.contactObjects[props.currentId]
            })
        }
    }, [props.currentId, props.contactObjects])

    const handlerInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit} >
            <input className="form-control" placeholder="Nome" name="nome"
                value={values.nome}
                onChange={handlerInputChange}
                required
            />
            <input className="form-control" placeholder="Idade" name="idade"
                value={values.idade}
                onChange={handlerInputChange}
                required
            />
            <input className="form-control" placeholder="Estado Civil" name="estadocivil"
                value={values.estadocivil}
                onChange={handlerInputChange}
                required
            />
            <input className="form-control" placeholder="CPF" name="cpf"
                value={values.cpf}
                onChange={handlerInputChange}
                minLength="1"
                maxLength="11"
                required
            />
            <input className="form-control" placeholder="Cidade" name="cidade"
                value={values.cidade}
                onChange={handlerInputChange}
                required
            />
            <input className="form-control" placeholder="Estado" name="estado"
                value={values.estado}
                onChange={handlerInputChange}
                required
            />
            <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary btn-block btn_bluegray" />
        </form>
    );
}


export default ContactForm;