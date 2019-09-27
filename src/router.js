import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import Admin from 'pages/admin/index';
import App from './App'
import Food from './pages/food/food'
import User from './pages/user/user'
import Carts from './pages/carts/index'
import GoodsList from './pages/goodsList'
import GoodsAdd from './pages/goodsAdd'
import Userlist from './pages/user/userslist/userlist'
import Useradd from './pages/user/usersadd/usersadd'
import Login from  './pages/login/login'
import TokenModel from './components/tokenModel/index'
import Userfind from './pages/user/userfind/userfind'
import Userinfo from './pages/user/userinfo/userinfo'
class RootRouter extends Component{
  render(){
    return(
      <App>
        <HashRouter>
          <TokenModel></TokenModel>
          <Switch>
            <Redirect exact from='/' to='/admin'></Redirect>
            <Route path='/admin' render={()=>{
              return(
                <Admin>
                  <Redirect exact from='/admin' to='/admin/food'></Redirect>
                  <Route  exact path='/admin/carts' component={Carts}></Route>
                  <Route path='/admin/food' component={Food}></Route>
                  <Route exact path='/admin/goods/list' component={GoodsList}></Route>
                  <Route exact path='/admin/goods/add' component={GoodsAdd}></Route>
                  <Route exact path='/admin/user' component={User}></Route>
                  <Route exact path='/admin/user/list' component={Userlist}></Route>
                  <Route exact path='/admin/user/add' component={Useradd}></Route>
                  <Route exact path='/admin/user/find' component={Userfind}></Route>
                  <Route exact path='/admin/user/info' component={Userinfo}></Route>
                </Admin>
              )
            }}></Route>
            <Route path='/login' component={Login}></Route>
          </Switch>
        </HashRouter>
      </App>
    )
  }
}
export default RootRouter