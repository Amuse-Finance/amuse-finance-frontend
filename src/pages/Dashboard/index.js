import { useState } from "react";
import { DashboardContainer } from "./styles.js";
import { Transaction } from "./transaction.styles.js";
import { IoMdSwap } from "react-icons/io";

const Dashboard =  () => {
    const [activeTab, setActiveTab] = useState("Transaction History");
    return (
        <DashboardContainer className="grid"> 
            <div className="grid dashboard-wrapper">
                <div className="grid card-container">
                    <section className="grid card">
                        <div className="grid">
                            <h3>AMD Price</h3>
                        </div>
                        <div className="grid sub-card">
                            <h1>1 AMD</h1>
                            <IoMdSwap className="icon" />
                            <h1>$0.25</h1>
                        </div>
                    </section>

                    <section className="grid card">
                        <div className="grid">
                            <h3>AMD Balance</h3>
                        </div>
                        <div className="grid sub-card">
                            <h1>2500 AMD</h1>
                            <IoMdSwap className="icon" />
                            <h1>$625</h1>
                        </div>
                    </section>

                    <section className="grid card">
                        <div className="grid">
                            <h3>Daily Rewards</h3>
                        </div>
                        <div className="grid sub-card">
                            <h1>50 AMD</h1>
                            <IoMdSwap className="icon" />
                            <h1>$12.5</h1>
                        </div>
                    </section>

                    <section className="grid card">
                        <div className="grid">
                            <h3>Weekly Rewards</h3>
                        </div>
                        <div className="grid sub-card">
                            <h1>350 AMD</h1>
                            <IoMdSwap className="icon" />
                            <h1>$87.5</h1>
                        </div>
                    </section>
                </div>

                <div className="grid card-container">
                    <section className="grid card">
                        <div className="grid">
                            <h3>Staked Balance</h3>
                        </div>
                        <div className="grid sub-card">
                            <h1>10000 AMD</h1>
                            <IoMdSwap className="icon" />
                            <h1>$2500</h1>
                        </div>
                    </section>

                    <section className="grid card">
                        <div className="grid">
                            <h3>Total claimed Rewards</h3>
                        </div>
                        <div className="grid sub-card">
                            <h1>100 AMD</h1>
                            <IoMdSwap className="icon" />
                            <h1>$25</h1>
                        </div>
                    </section>

                    <section className="grid card">
                        <div className="grid">
                            <h3>Estimated AMD Rewards</h3>
                        </div>
                        <div className="grid sub-card">
                            <h1>700 AMD</h1>
                            <IoMdSwap className="icon" />
                            <h1>$175</h1>
                        </div>
                    </section>

                    <section className="grid card">
                        <div className="grid">
                            <h3>Estimated ETH Rewards</h3>
                        </div>
                        <div className="grid sub-card">
                            <h1>350 AMD</h1>
                            <IoMdSwap className="icon" />
                            <h1>0.035 ETH</h1>
                        </div>
                    </section>
                </div>
            </div>

            <Transaction className="grid">
                <section className="grid transaction-header">
                    <div className={activeTab === "Transaction History" ? "grid tabs active" : "grid tabs"} onClick={() => setActiveTab("Transaction History")}>
                        <h2>Transaction History</h2>
                    </div>

                    <div className={activeTab === "Cashback History" ? "grid tabs active" : "grid tabs"} onClick={() => setActiveTab("Cashback History")}>
                        <h2>Cashback History</h2>
                    </div>
                </section>

                
            </Transaction>
        </DashboardContainer>
    );
}

export default Dashboard;