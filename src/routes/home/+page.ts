import loadSuppliers from '$data/suppliers/loadSuppliers';
import { suppliers } from './store';

async function loadAndSetSuppliersSync() {
    const supplierData = await loadSuppliers();
    suppliers.set(supplierData);
}

loadAndSetSuppliersSync();