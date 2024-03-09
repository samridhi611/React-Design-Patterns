import logo from './logo.svg';
import './App.css';
import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { ProductInfo } from './ProductInfo';

function App() {
  return (
    <>
    {/* <UserLoader userId='1'>
      <UserInfo/>
    </UserLoader >
    <UserLoader userId='2'>
      <UserInfo/>
    </UserLoader >
    <UserLoader userId='3'>
      <UserInfo/>
    </UserLoader > */}

    <ResourceLoader resourceUrl='/users/1' resourceName='user'>
      <UserInfo/>
    </ResourceLoader>

    <ResourceLoader resourceUrl='/products/1111' resourceName='product'>
      <ProductInfo/>
    </ResourceLoader>
    </>
  );
}

export default App;
