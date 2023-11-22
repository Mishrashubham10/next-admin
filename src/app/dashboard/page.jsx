import styles from '../ui/dashboard/dashborad.module.css';

import Card from "../ui/dashboard/card/card"
import RightBar from '../ui/dashboard/rightBar/rightBar';
import Transactions from '../ui/dashboard/transactions/transactions';
import Chart from '../ui/dashboard/chart/chart';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
      <Transactions />
      <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard