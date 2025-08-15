
// Storage keys
const STORE_KEY = 'hrd_members_v3';
const SESSION_KEY = 'hrd_session_v1';
// Helpers
function loadMembers(){
  try{ return JSON.parse(localStorage.getItem(STORE_KEY)||'[]'); }catch(e){ return []; }
}
function saveMembers(list){ localStorage.setItem(STORE_KEY, JSON.stringify(list)); }
function setSession(obj){ sessionStorage.setItem(SESSION_KEY, JSON.stringify(obj)); }
function getSession(){ try{ return JSON.parse(sessionStorage.getItem(SESSION_KEY)||'null'); }catch(e){ return null; } }
function clearSession(){ sessionStorage.removeItem(SESSION_KEY); }
function formatINR(n){ n=parseFloat(n||0); return isNaN(n)?'0.00':n.toFixed(2); }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function logout(){ clearSession(); location.href='login.html'; }
