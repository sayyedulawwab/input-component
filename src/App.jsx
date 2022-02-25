import Input from "./components/Input";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='mx-auto w-4/5'>
      <h1 className='text-2xl font-bold py-5'>Inputs</h1>
      <Input />
      <Input error />
      <Input disabled />
      <Input helperText='Some interesting text' />
      <Input helperText='Some interesting text' error />
      <Input startIcon />
      <Input endIcon />
      <Input value='text' />
      <Input size='sm' />
      <Input size='md' />
      <Input fullWidth />
      <Input multiline row='4' />
      <Footer />
    </div>
  );
}

export default App;
