import React from 'react';
import { HomeCard } from '../../components/HomeCard';
import { TransactionCard,TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWapper,
  Icon,
  SliderCards,
  Transactions,
  Titulo,
  TransactionList,
  LogoutButton} 
from './styles';

export interface DataListProps extends TransactionCardProps{
  id:string;
}

export function Dashboard(){

  const data:DataListProps [] =  [{
      id:'1',
      type:'positive',
      title : "Desenvolvimento de Site",
      amount : "R$ 12.000,00",
        category:{ 
          name: 'Vendas',
          icon:'dollar-sign' 
        },
      date:"12/12/2020"
  },
  {
    id:'2',
    type:'negative',
    title : "hambugger Pizzi",
    amount : "R$ 59,00",
      category:{ 
        name: 'Alimentação',
        icon:'coffee' 
      },
    date:"12/12/2020"
},
{
  id:'3',
  type:'positive',
  title : "Aluguel da Casa",
  amount : "R$ 1.200,00",
    category:{ 
      name: 'Casa',
      icon:'shopping-bag' 
    },
  date:"12/12/2020"
}
]

    return (
        <Container>
          <Header>
            <UserWapper>
            <UserInfo>
              <Photo source={{ uri:'https://media-exp1.licdn.com/dms/image/C4E03AQFrzK8qXEbIxw/profile-displayphoto-shrink_100_100/0/1626086132319?e=1631750400&v=beta&t=PppWQYI2Gu89sk4dqLgD2xcHGX1HqkhvRYzjzPvpd0E' }} />
              <User>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Joabe</UserName>
              </User>
            </UserInfo>
            <LogoutButton onPress={()=>{}}>
              <Icon name="power"/>
            </LogoutButton>
            </UserWapper>
            
          </Header>
          <SliderCards>
            <HomeCard title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril" type="up"></HomeCard>
            <HomeCard title="Saidas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril" type="down"></HomeCard>
            <HomeCard title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril" type="total"></HomeCard>
          </SliderCards>
          <Transactions>
            <Titulo>Listagem</Titulo>
            <TransactionList
                data={data}
                keyExtractor={item  => item.id}
                renderItem={({item})=> <TransactionCard  data={item}  />}
            />
          </Transactions>
        </Container>
      );
}