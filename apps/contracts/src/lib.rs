#![no_std]
use soroban_sdk::{contract, contractimpl, Env};

#[contract]
pub struct RentalContract;

#[contractimpl]
impl RentalContract {
    pub fn initialize(env: Env) -> bool {
        true
    }
}
