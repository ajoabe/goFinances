import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Alert, Keyboard, Modal ,TouchableWithoutFeedback} from 'react-native';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { InputForm } from '../../components/Form/InputForm';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container,Header,Title,Form ,Fields,TransactionsTypes} from './style';



interface FormData {
    name:string;
    amount:string;
}

const schema = yup.object().shape({
    name: yup.string().required('O campo Nome é obrigatório'),
    amount: yup.number().positive('O campo Valor não pode ser negativo').required('O campo Valor é obrigatório').typeError('Informe um Valor numérico'),
});

export function Register(){

    
    const [transactionType,setTransactionType] = useState(''); 
    const [categoryModalOpen,setcategoryModalOpen] = useState(false); 

    const [category,setCategory] = useState({
        key:'category',
        name:'Categoria'
    }); 


    const {
        control,
        handleSubmit,
        formState:{errors}
    } = useForm({
        resolver:yupResolver(schema)
    });

    function handleTransactionsTypesSelect(type:'up'|'down'){
        setTransactionType(type);
    }

    function handleCloseSelectCategoryModal(){
        setcategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal(){
        setcategoryModalOpen(true);
    }

    function handleRegister(form:FormData){

        if(!transactionType){
            return Alert.alert('Selecione um tipo da transação');
        }

        if(category.key === 'category'){
            return Alert.alert('Selecione a categoria');
        }
        
        const data = {
            name: form.name,
            amount:form.amount,
            transactionType,
            category:category.key
        }

        console.log(data);
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
                <Form>
                    <Fields>
                        <InputForm
                            name="name" 
                            placeholder="Nome"
                            control={control}
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />
                        <InputForm
                            name="amount"  
                            placeholder="Preço"
                            control={control}
                            keyboardType='numeric'
                            error={errors.amount && errors.amount.message}
                        />
                        <TransactionsTypes>
                            <TransactionTypeButton title="Entrada" type="up" onPress={() => handleTransactionsTypesSelect('up')} isActive={transactionType === 'up'}/>
                            <TransactionTypeButton title="Saida" type="down" onPress={() => handleTransactionsTypesSelect('down')} isActive={transactionType === 'down'}/>
                        </TransactionsTypes>
                        <CategorySelectButton 
                        onPress={handleOpenSelectCategoryModal}
                        title={category.name}/>
                    </Fields>    
                    <Button 
                        title="Enviar"
                        onPress={handleSubmit(handleRegister)}
                    />
                </Form>
                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}                    
                    />
                </Modal>
        </Container>
        </TouchableWithoutFeedback>
    );
}