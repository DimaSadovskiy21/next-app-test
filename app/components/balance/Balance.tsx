import { BalanceWrapper, Item, Items, ReservedItem } from "./styles";

const Balance = () => <BalanceWrapper>
    <p>Balance</p>
    <Items>
        <Item>
            <p>Aviable</p>
            <p>27.45 GBP</p>
        </Item>
        <ReservedItem>
            <p>Reserved</p>
            <p>0.00 GBP</p>
        </ReservedItem>
        <Item>
            <p>Total</p>
            <p>27.45 GBP</p>
        </Item>
    </Items>
</BalanceWrapper>

export default Balance;
