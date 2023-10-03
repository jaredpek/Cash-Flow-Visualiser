import Layout from "../layouts/Layout";
import CashFlowChart from "../components/visualiser/CashFlowChart";
import IncomeSection from "../components/visualiser/IncomeSection";
import ExpenseSection from "../components/visualiser/ExpenseSection";
import InvestmentSection from "../components/visualiser/InvestmentSection";
import LiabilitySection from "../components/visualiser/LiabilitySection";

export default function Dashboard() {
    return (
        <Layout>
            <div className="title-main">Dashboard</div>
            <div className="grid gap-5">
                <CashFlowChart />
                <IncomeSection />
                <ExpenseSection />
                <InvestmentSection />
                <LiabilitySection />
            </div>
        </Layout>
    )
}