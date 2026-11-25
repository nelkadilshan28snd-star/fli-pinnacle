import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  Bell,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  CloudSun,
  Download,
  Droplets,
  Edit3,
  ExternalLink,
  Eye,
  FileSpreadsheet,
  FileText,
  Filter,
  Gamepad2,
  Globe,
  Heart,
  HelpCircle,
  Home,
  Inbox,
  Landmark,
  Layers,
  Lightbulb,
  LogOut,
  Menu,
  MessageSquare,
  Moon,
  Pin,
  Plus,
  Printer,
  RotateCcw,
  Search,
  Send,
  Shield,
  Sparkles,
  Star,
  StickyNote,
  Sun,
  Tag,
  Trophy,
  Upload,
  User,
  UserCheck,
  Users,
  Wifi,
  X
} from 'lucide-react';

// ============================================================================
// 1. INITIAL DATA: FUTURE LIFE INVESTMENTS LIMITED (FLi Pinnacle) TEAM & TREE
// ============================================================================

const INITIAL_USERS = [
  {
    id: 'rangika',
    empCode: 'FLI-FIN-001',
    name: 'Rangika Edirisooriya',
    roleTitle: 'Finance Manager (HOD)',
    phone: '070-4320181',
    email: 'rangikae@fli.lk',
    pin: '1234',
    supervisorId: null,
    isAdmin: true,
    brainColor: 'Red',
    joiningDate: '2018-04-02',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Head of Finance Department — Future Life Investments Limited.',
    health: { heightCm: 162, weightKg: 58, bloodGroup: 'O+', notes: 'Morning hydration active' },
    experiences: [
      { id: 'exp-r1', company: 'Future Life Investments Limited', role: 'Finance Manager', period: '2018 - Present', status: 'approved' }
    ],
    qualifications: [
      { id: 'q-r1', title: 'FCA / B.Sc. Accountancy & Finance', institute: 'CA Sri Lanka', year: '2017', status: 'approved' }
    ]
  },
  {
    id: 'mahasen',
    empCode: 'FLI-FIN-002',
    name: 'Mahasen Wijesooriya',
    roleTitle: 'Assistant Manager',
    phone: '070-5407459',
    email: 'mahasenw@fli.lk',
    pin: '1234',
    supervisorId: 'rangika',
    isAdmin: false,
    brainColor: 'Green',
    joiningDate: '2019-06-10',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Assistant Manager overseeing daily treasury, compliance & reconciliations.',
    health: { heightCm: 174, weightKg: 72, bloodGroup: 'B+', notes: '' },
    experiences: [],
    qualifications: [{ id: 'q-m1', title: 'CIMA Passed Finalist', institute: 'CIMA UK', year: '2019', status: 'approved' }]
  },
  {
    id: 'kanishka',
    empCode: 'FLI-FIN-003',
    name: 'Kanishka Chathuranga',
    roleTitle: 'Senior Finance Executive',
    phone: '070-5407333',
    email: 'kanishkac@fli.lk',
    pin: '1234',
    supervisorId: 'mahasen',
    isAdmin: false,
    brainColor: 'Purple',
    joiningDate: '2020-02-15',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Senior Finance Executive supervising operational accounting teams.',
    health: { heightCm: 172, weightKg: 68, bloodGroup: 'A+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'hansi',
    empCode: 'FLI-FIN-004',
    name: 'Thamasha Hansi',
    roleTitle: 'Senior Finance Executive',
    phone: '070-4765939',
    email: 'thamashah@fli.lk',
    pin: '1234',
    supervisorId: 'kanishka',
    isAdmin: false,
    brainColor: 'Blue',
    joiningDate: '2020-08-01',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Senior Finance Executive leading HO reconciliations & interest operations.',
    health: { heightCm: 160, weightKg: 55, bloodGroup: 'O+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'nayomi',
    empCode: 'FLI-FIN-005',
    name: 'Nayomi Ekanayake',
    roleTitle: 'Finance Executive',
    phone: '070-47709654',
    email: 'nayomie@fli.lk',
    pin: '1234',
    supervisorId: 'kanishka',
    isAdmin: false,
    brainColor: 'Blue',
    joiningDate: '2021-01-12',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Finance Executive coordinating branch reconciliations & daily entries.',
    health: { heightCm: 158, weightKg: 53, bloodGroup: 'B+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'dilshan',
    empCode: 'FLI-FIN-006',
    name: 'Dilshan Kularathne',
    roleTitle: 'Finance Executive',
    phone: '070-4770964',
    email: 'dilshank@fli.lk',
    pin: '1234',
    supervisorId: 'kanishka',
    isAdmin: false,
    brainColor: 'Purple',
    joiningDate: '2021-05-18',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Finance Executive handling Loan Cash, Allocation Plan & FLICO entries.',
    health: { heightCm: 175, weightKg: 74, bloodGroup: 'A+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'nikeshala',
    empCode: 'FLI-FIN-007',
    name: 'Nikeshala Chandrasiri',
    roleTitle: 'Junior Finance Executive',
    phone: '070-4770917',
    email: 'nikeshalac@fli.lk',
    pin: '1234',
    supervisorId: 'hansi',
    isAdmin: false,
    brainColor: 'Green',
    joiningDate: '2022-03-01',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Junior Finance Executive managing Head Office Reconciliations & Branch PNL.',
    health: { heightCm: 161, weightKg: 54, bloodGroup: 'O+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'shani',
    empCode: 'FLI-FIN-008',
    name: 'Shani Peterson',
    roleTitle: 'Junior Finance Executive',
    phone: '070-4765873',
    email: 'shanip@fli.lk',
    pin: '1234',
    supervisorId: 'hansi',
    isAdmin: false,
    brainColor: 'Red',
    joiningDate: '2022-07-11',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Junior Finance Executive coordinating Daily Entries Sharing, Corporate & Interest.',
    health: { heightCm: 159, weightKg: 52, bloodGroup: 'AB+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'dinithi',
    empCode: 'FLI-FIN-009',
    name: 'Dinithi Perera',
    roleTitle: 'Junior Finance Executive',
    phone: '070-4777742',
    email: 'dinithip@fli.lk',
    pin: '1234',
    supervisorId: 'hansi',
    isAdmin: false,
    brainColor: 'Red',
    joiningDate: '2022-09-05',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Junior Finance Executive managing Payment Slips, Petty Cash & BOC 962 Rec.',
    health: { heightCm: 157, weightKg: 56, bloodGroup: 'O+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'charuka',
    empCode: 'FLI-FIN-010',
    name: 'Charuka Mihiranga',
    roleTitle: 'Finance Executive',
    phone: '070-4770907',
    email: 'charukaw@fli.lk',
    pin: '1234',
    supervisorId: 'nayomi',
    isAdmin: false,
    brainColor: 'Green',
    joiningDate: '2021-11-15',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Finance Executive handling 14 Branch Reconciliations, OPD & Staff Loans.',
    health: { heightCm: 176, weightKg: 78, bloodGroup: 'B+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'gayodya',
    empCode: 'FLI-FIN-011',
    name: 'Gayodya Athugala',
    roleTitle: 'Junior Finance Executive',
    phone: '070-4770955',
    email: 'gayodhyaa@fli.lk',
    pin: '1234',
    supervisorId: 'nayomi',
    isAdmin: false,
    brainColor: 'Blue',
    joiningDate: '2023-01-16',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Junior Finance Executive managing Temporary Receipts, Tax & 13 Reconciliations.',
    health: { heightCm: 160, weightKg: 59, bloodGroup: 'A+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'nelka',
    empCode: 'FLI-FIN-012',
    name: 'Nelka Dilshan',
    roleTitle: 'Senior Finance Executive',
    phone: '070-5407412',
    email: 'dilshann@fli.lk',
    pin: '1234',
    supervisorId: 'nayomi',
    isAdmin: false,
    brainColor: 'Blue',
    joiningDate: '2020-10-05',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Senior Finance Executive handling BOC/Seylan Recs, Depreciation & Cash Flows.',
    health: { heightCm: 173, weightKg: 70, bloodGroup: 'O+', notes: '' },
    experiences: [],
    qualifications: []
  },
  {
    id: 'dhanushka',
    empCode: 'FLI-FIN-013',
    name: 'Dhanushka Chamod',
    roleTitle: 'Accounts Assistant',
    phone: '070-4777841',
    email: 'dhanushkac@fli.lk',
    pin: '1234',
    supervisorId: 'nayomi',
    isAdmin: false,
    brainColor: 'Green',
    joiningDate: '2024-02-01',
    onLeave: false,
    coveringUserId: '',
    photoUrl: '',
    bio: 'Accounts Assistant handling Cheques, 13 Seylan/Sampath Recs & Daily Vouchers.',
    health: { heightCm: 171, weightKg: 66, bloodGroup: 'B+', notes: '' },
    experiences: [],
    qualifications: []
  }
];

const BRAIN_COLOR_STYLES = {
  Red: { badge: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-500', label: 'Red • Action & Results' },
  Green: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', label: 'Green • Precision & Process' },
  Purple: { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-500', label: 'Purple • Vision & Strategy' },
  Blue: { badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500', label: 'Blue • People & Harmony' }
};

const INITIAL_QUICK_LINKS = [
  { id: 'ql-1', name: 'Fused Core System', desc: 'ERP & Core Ledger', url: 'https://fused.fli.lk/auth/login', tag: 'Core' },
  { id: 'ql-2', name: 'FLI Webmail', desc: 'Corporate Zimbra Mail', url: 'https://mail.fli.lk/?loginOp=logout', tag: 'Mail' },
  { id: 'ql-3', name: 'Wealth2 Portal', desc: 'Investment & FD Portal', url: 'https://wealth2.fli.lk/', tag: 'Wealth' },
  {
    id: 'ql-4',
    name: 'GalleryHR',
    desc: 'Attendance & Leave HRIS',
    url: 'https://login.galleryhr.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D653efba3-9884-4e26-8228-2b1f0bfe32e1%26redirect_uri%3Dhttps%253A%252F%252Fapp.galleryhr.com%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520tenant_code%2520employee_code%2520employeeid%2520user_code%2520userid%2520IdentityServerApi%2520name%26code_challenge%3Dtb4253m9FaBEy24YSBElHwTWqnqwS2Z2_f3CJB-QeNo%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D639307555150238291.YzdiOWEyYjEtNjAxNC00Nzg3LWI0ODItZTQ2NjNlODdlMjQ2YWJmOGVlMmEtZjVjNy00MzlmLWFhZGEtZjIzMzdlNmNjMTgx%26state%3DCfDJ8IxPFlY4ycZPv8bFAcrzkFoKL_cI_-WGzjXDgJF9NtMN8G02z-oNDZCOsfb64cmCu_VBcTomJxcaPy5xq871jTzS1Ln5l-IFyefcWaERuszNPjHEbfTQZ_nlaGx1RwYGj2bxAu8eGyK_GjS50Yc1xXCm5o4yN1ui6zj9KSEV8f486Nf5mMXKo-uV6uIsWOuyB9v67XBEEqlBeE0KMBJEkme6YXc4YZ3iCo8Cd0fWve-JQfRzeFxo-uiow7CYEuiBpPmIzPS4o7Vg6IG9U1jLu69djC7hVdbkQ1FImyHdGR7eSoTzNYKIEYZVAJSUpNOEqnHcpbma7oMwGg0IZoRKSqkimQMYVwZErvDJ5-gpuhhqfK494a0_1FCUK3ysbqkqsypCmDFxMAbZyePxgAJ_S9xd90YkRRySX64t5ODy_ikQsM9lN19IVh51M3z4Zz6vnw%26x-client-SKU%3DID_NET10_0%26x-client-ver%3D8.0.1.0',
    tag: 'HRIS'
  },
  { id: 'ql-5', name: 'Nexo API Client', desc: 'API Testing & Webhooks', url: 'https://nexo-api-client.vercel.app/', tag: 'Tools' }
];

const FLI_GUIDING_PRINCIPLES = [
  { id: 1, title: 'Win Together', subtitle: 'Grow Together' },
  { id: 2, title: 'Chase Progress', subtitle: 'Not Perfection' },
  { id: 3, title: 'Earn Trust', subtitle: 'Not just Business' },
  { id: 4, title: 'See it. Own it. Solve it.', subtitle: 'Proactive Accountability' },
  { id: 5, title: 'Keep Your Word.', subtitle: 'Own Your Action' },
  { id: 6, title: 'Power comes from trust,', subtitle: 'Not Positions' },
  { id: 7, title: 'Empower with word,', subtitle: 'Coach with open heart' },
  { id: 8, title: 'Feedback is a gift,', subtitle: 'Not an Attack' }
];

const DAILY_QUOTES = [
  { text: 'Precision in numbers builds trust in every decision we make.', author: 'FLi Pinnacle Finance' },
  { text: 'Win together, grow together — every reconciliation balanced is a milestone earned.', author: 'Future Life Investments' },
  { text: 'Chase progress, not perfection. Small disciplined steps close every ledger cleanly.', author: 'FLI Our Pledge #2' },
  { text: 'See it, own it, solve it — proactive ownership turns routine entries into excellence.', author: 'FLI Our Pledge #4' }
];

const REC_VARIANCE_TAGS = ['Matched', 'Timing Difference', 'Missing Slip', 'CRO / Bank Query'];

const INITIAL_BANK_RECS = [
  // Nikeshala (6)
  ...[
    'SAMPATH - 009810004042-HO 1',
    'SEYLAN - 13012776905002 - HO2',
    'Sampath - 011611002972 - HO TG',
    'Sampath - 111615001611 - HO TG MM',
    'Sampath - 109815001677 -HO JE MM',
    'Sampath - 109815001818 - JE MM 1818'
  ].map((acc, i) => ({
    id: `rec-nik-${i}`,
    account: acc,
    userId: 'nikeshala',
    status: i === 0 ? 'completed' : 'pending',
    tag: i === 0 ? 'Matched' : 'Timing Difference',
    remark: i === 0 ? 'Matched with HO cashbook' : ''
  })),
  // Dinithi (1)
  { id: 'rec-din-0', account: 'BOC - 0080127962 - HO', userId: 'dinithi', status: 'pending', tag: 'Timing Difference', remark: '' },
  // Nayomi (8)
  ...[
    'HNB -CA-701010018411',
    'HNB -MM-WEALTH-701020143217',
    'HNB-MM-Finance-701020143208',
    'NDB - 101000661121 - HO',
    'PANASIA-105211000653-HO',
    'SEYLAN - 13012776905001 - HO1',
    'SEYLAN - 13012776905034 - HO HR',
    'SEYLAN - 13012776905027- AI'
  ].map((acc, i) => ({
    id: `rec-nay-${i}`,
    account: acc,
    userId: 'nayomi',
    status: i < 2 ? 'completed' : 'pending',
    tag: i < 2 ? 'Matched' : 'Missing Slip',
    remark: i < 2 ? 'Balanced' : ''
  })),
  // Charuka (14)
  ...[
    'SAMPATH - 021210003166 - NK',
    'SEYLAN - 13012776905023-TR',
    'SAMPATH -021210004111 - KR',
    'SAMPATH-006010009993-PU',
    'Sampath-009810006320-ML',
    'SAMPATH-009810007084 - BE',
    'SAMPATH-009810007092 - AP',
    'SAMPATH-009810007106 - MG',
    'SEYLAN - 13012776905021- RP',
    'SEYLAN - 13012776905037-BW',
    'SEYLAN - 13012776905007 - T and D',
    'SEYLAN - 13012776905008 - KG',
    'SEYLAN - 13012776905009 - CH',
    'SEYLAN - 13012776905010 -NG'
  ].map((acc, i) => ({
    id: `rec-cha-${i}`,
    account: acc,
    userId: 'charuka',
    status: i < 3 ? 'completed' : 'pending',
    tag: i < 3 ? 'Matched' : 'Timing Difference',
    remark: ''
  })),
  // Dhanushka (13)
  ...[
    'SEYLAN - 13012776905024-BG',
    'SEYLAN - 13012776905029 - MD',
    'SEYLAN -13012776905012 - WP',
    'SAMPATH-9810007513-DG',
    'SAMPATH-9810007572-NW',
    'SAMPATH-9810007637-MA',
    'SEYLAN - 13012776905003 - KP',
    'SEYLAN - 13012776905004 - PT',
    'SEYLAN - 13012776905005 - JE',
    'SEYLAN - 13012776905006 - KB',
    'SEYLAN - 13012776905019- NL',
    'SEYLAN - 13012776905020- AV',
    'SEYLAN - 13012776905030 - KM'
  ].map((acc, i) => ({
    id: `rec-dha-${i}`,
    account: acc,
    userId: 'dhanushka',
    status: i < 2 ? 'completed' : 'pending',
    tag: i < 2 ? 'Matched' : 'CRO / Bank Query',
    remark: ''
  })),
  // Gayodya (13)
  ...[
    'NDB -101000689662 - KW',
    'PANASIA-105211000662 -PO',
    'SAMPATH - 021210002933-WW',
    'SAMPATH -006010009985-KD',
    'SAMPATH -021210004103- KH',
    'SAMPATH - 009811002456 -AM',
    'Sampath - 009811006595 - EM',
    'Sampath- 009811006594 - KA',
    'SAMPATH-009810007149-KU',
    'Sampath-019810001596-DP',
    'Sampath-019810001618-VL',
    'SEYLAN - 13012776905018- TM',
    'SAMPATH - 009811002799 - JF CITY'
  ].map((acc, i) => ({
    id: `rec-gay-${i}`,
    account: acc,
    userId: 'gayodya',
    status: i < 2 ? 'completed' : 'pending',
    tag: i < 2 ? 'Matched' : 'Timing Difference',
    remark: ''
  })),
  // Nelka (12)
  ...[
    'BOC - 82051634 - BM',
    'BOC - 85968461 - PG',
    'BOC - 86969834 - KN',
    'BOC - 91646743 - PD',
    'BOC -82807715 - MP',
    'BOC-93613789-TK',
    'SEYLAN - 13012776905028 - CO3',
    'SEYLAN - 13012776905011 - GP',
    'SEYLAN - 13012776905013- NE',
    'SEYLAN - 13012776905014- JF',
    'SEYLAN - 13012776905015- VN',
    'SEYLAN - 13012776905016- MR'
  ].map((acc, i) => ({
    id: `rec-nel-${i}`,
    account: acc,
    userId: 'nelka',
    status: i < 4 ? 'completed' : 'pending',
    tag: i < 4 ? 'Matched' : 'Timing Difference',
    remark: ''
  })),
  // Shani (14)
  ...[
    'SEYLAN - 13012776905022- BT',
    'SEYLAN - 13012776905017- FC',
    'SEYLAN - 13012776905031 - KK',
    'SEYLAN - 13012776905032 - BD',
    'SEYLAN - 13012776905033 - PN',
    'SEYLAN - 13012776905035- NT',
    'SEYLAN - 13012776905036-MT',
    'SEYLAN - 13012776905038-BL',
    'SEYLAN - 13012776905039-AG',
    'SEYLAN - 13012776905040-KL',
    'SEYLAN- 130127769050123',
    'SAMPATH-009810007270-DY',
    'SAMPATH-009811001471-HT',
    'Sampath - 009811007019 - KI'
  ].map((acc, i) => ({
    id: `rec-sha-${i}`,
    account: acc,
    userId: 'shani',
    status: i < 3 ? 'completed' : 'pending',
    tag: i < 3 ? 'Matched' : 'Timing Difference',
    remark: ''
  }))
];

const INITIAL_TASKS = [
  // Dinithi JD
  {
    id: 't-din-1',
    userId: 'dinithi',
    title: 'Attaching Payment Slips & Handover to Shani',
    category: 'Daily',
    timeSlot: '08:30 AM - 08:50 AM',
    allocatedMinutes: 20,
    actualMinutes: 18,
    status: 'completed_pending_approval',
    accepted: true,
    handoverTo: 'shani',
    handoverAcknowledged: false,
    remark: 'All morning payment slips attached & handed over to Shani.',
    subItems: []
  },
  {
    id: 't-din-2',
    userId: 'dinithi',
    title: 'Petty Cash Float Count, Sheet Checking & Pass Entries',
    category: 'Daily',
    timeSlot: '08:50 AM - 09:10 AM',
    allocatedMinutes: 20,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  },
  {
    id: 't-din-3',
    userId: 'dinithi',
    title: 'Daily System Entries / Daily Entries Voucher Printing',
    category: 'Daily',
    timeSlot: '09:10 AM - 12:15 PM',
    allocatedMinutes: 185,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: [
      { id: 'vs-1', label: 'Batch 01: Cash Receipt Vouchers & Slip Verification', done: false, escalated: false },
      { id: 'vs-2', label: 'Batch 02: Payment Vouchers Entry & Printing', done: false, escalated: false },
      { id: 'vs-3', label: 'Batch 03: Journal Transfers & Voucher Numbering', done: false, escalated: false }
    ]
  },
  {
    id: 't-din-4',
    userId: 'dinithi',
    title: 'Receivable Payable Ledger Tally',
    category: 'Daily',
    timeSlot: '01:00 PM - 02:00 PM',
    allocatedMinutes: 60,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: []
  },
  {
    id: 't-din-5',
    userId: 'dinithi',
    title: 'BOC 962 Reconciliation & Cash Flow',
    category: 'Daily',
    timeSlot: '02:00 PM - 05:00 PM',
    allocatedMinutes: 180,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: []
  },
  {
    id: 't-din-me1',
    userId: 'dinithi',
    title: 'Prepare Home Appliance Final Report & Entry',
    category: 'Month End',
    timeSlot: 'Month-End Schedule',
    allocatedMinutes: 480,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: []
  },
  // Shani JD
  {
    id: 't-sha-1',
    userId: 'shani',
    title: 'Update Daily Cashflow',
    category: 'Daily',
    timeSlot: '08:30 AM - 08:45 AM',
    allocatedMinutes: 15,
    actualMinutes: 15,
    status: 'approved',
    accepted: true,
    remark: 'Cashflow updated on time',
    subItems: []
  },
  {
    id: 't-sha-2',
    userId: 'shani',
    title: 'Daily Entries Sharing (Seylan & Sampath Allocation)',
    category: 'Daily',
    timeSlot: '09:00 AM - 09:30 AM',
    allocatedMinutes: 30,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    timerStartedAt: null,
    remark: 'Waiting for Dinithi payment slip handover acknowledgment',
    subItems: []
  },
  {
    id: 't-sha-3',
    userId: 'shani',
    title: 'Corporate Payments Transfer & Pass Entries',
    category: 'Daily',
    timeSlot: '10:00 AM - 01:30 PM',
    allocatedMinutes: 210,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: []
  },
  {
    id: 't-sha-4',
    userId: 'shani',
    title: 'Interest Reconciliation & Run Entry',
    category: 'Daily',
    timeSlot: '01:00 PM - 02:30 PM',
    allocatedMinutes: 60,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: []
  },
  {
    id: 't-sha-me1',
    userId: 'shani',
    title: 'WHT Ledger Tally, WHT Payment & IRD Details',
    category: 'Month End',
    timeSlot: '15th / Month-End',
    allocatedMinutes: 105,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: []
  },
  // Nikeshala JD
  {
    id: 't-nik-1',
    userId: 'nikeshala',
    title: 'Update Daily Cashflow & Morning Bank Balance',
    category: 'Daily',
    timeSlot: '08:30 AM - 08:45 AM',
    allocatedMinutes: 15,
    actualMinutes: 14,
    status: 'approved',
    accepted: true,
    remark: '',
    subItems: []
  },
  {
    id: 't-nik-2',
    userId: 'nikeshala',
    title: 'Preparing Transfer Entry & Head Office Reconciliations',
    category: 'Daily',
    timeSlot: '08:45 AM - 02:30 PM',
    allocatedMinutes: 180,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  },
  {
    id: 't-nik-me1',
    userId: 'nikeshala',
    title: 'Branch, AI & Pawn PNL Preparing',
    category: 'Month End',
    timeSlot: 'Month-End (2 Days)',
    allocatedMinutes: 960,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: []
  },
  // Gayodya JD
  {
    id: 't-gay-1',
    userId: 'gayodya',
    title: 'Issuing Temporary Receipts & Assigning PS Numbers',
    category: 'Daily',
    timeSlot: '08:45 AM - 10:00 AM',
    allocatedMinutes: 90,
    actualMinutes: 85,
    status: 'completed_pending_approval',
    accepted: true,
    remark: 'All morning deposit slips verified',
    subItems: []
  },
  {
    id: 't-gay-2',
    userId: 'gayodya',
    title: 'Daily System Entries / Daily Entries Voucher Printing',
    category: 'Daily',
    timeSlot: '10:00 AM - 12:00 PM',
    allocatedMinutes: 120,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: [
      { id: 'vg-1', label: 'Temporary Receipts Voucher Printing', done: false, escalated: false },
      { id: 'vg-2', label: 'Tax & Branch Deposit System Entries', done: false, escalated: false }
    ]
  },
  {
    id: 't-gay-me1',
    userId: 'gayodya',
    title: 'Stock Tally (HR Stock / T&D / Diri Liya Stock)',
    category: 'Month End',
    timeSlot: 'Month-End Schedule',
    allocatedMinutes: 360,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: []
  },
  // Charuka JD
  {
    id: 't-cha-1',
    userId: 'charuka',
    title: 'Previous Day Run Payments & Daily System Entries',
    category: 'Daily',
    timeSlot: '08:45 AM - 11:15 AM',
    allocatedMinutes: 150,
    actualMinutes: 145,
    status: 'approved',
    accepted: true,
    remark: '',
    subItems: []
  },
  {
    id: 't-cha-2',
    userId: 'charuka',
    title: 'OPD, Staff Loan, Employee & T&D Payments',
    category: 'Daily',
    timeSlot: '03:00 PM - 05:00 PM',
    allocatedMinutes: 120,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  },
  // Nelka JD
  {
    id: 't-nel-1',
    userId: 'nelka',
    title: 'Daily System Entries & Cash Advance Settlement',
    category: 'Daily',
    timeSlot: '08:45 AM - 12:15 PM',
    allocatedMinutes: 240,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  },
  {
    id: 't-nel-me1',
    userId: 'nelka',
    title: 'Preparing All Branch Cash Flows & Depreciation Entry',
    category: 'Month End',
    timeSlot: 'Month-End Schedule',
    allocatedMinutes: 320,
    actualMinutes: 0,
    status: 'pending',
    accepted: false,
    remark: '',
    subItems: []
  },
  // Dhanushka JD
  {
    id: 't-dha-1',
    userId: 'dhanushka',
    title: 'Handling Cheques (Legal Float, ML Wallet, Suppliers)',
    category: 'Daily',
    timeSlot: 'Within Day (7 Min / Cheque)',
    allocatedMinutes: 90,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  },
  // Dilshan JD
  {
    id: 't-dil-1',
    userId: 'dilshan',
    title: 'Loan Cash & Cash Allocation Plan',
    category: 'Daily',
    timeSlot: '08:30 AM - 03:30 PM',
    allocatedMinutes: 90,
    actualMinutes: 80,
    status: 'completed_pending_approval',
    accepted: true,
    remark: 'Daily cash plan circulated',
    subItems: []
  },
  // Supervisory KPIs
  {
    id: 't-han-1',
    userId: 'hansi',
    title: 'Review HO Reconciliations & Interest Entries (Team Verification)',
    category: 'Daily',
    timeSlot: '03:30 PM - 05:00 PM',
    allocatedMinutes: 90,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  },
  {
    id: 't-nay-1',
    userId: 'nayomi',
    title: 'Verify Branch Reconciliations & Voucher Batches',
    category: 'Daily',
    timeSlot: '03:30 PM - 05:00 PM',
    allocatedMinutes: 90,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  },
  {
    id: 't-kan-1',
    userId: 'kanishka',
    title: 'Department Daily Cashflow & Senior Executive Sign-Off',
    category: 'Daily',
    timeSlot: '04:30 PM - 05:30 PM',
    allocatedMinutes: 60,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  },
  {
    id: 't-mah-1',
    userId: 'mahasen',
    title: 'Treasury & Bank Compliance Oversight Review',
    category: 'Daily',
    timeSlot: '04:30 PM - 05:30 PM',
    allocatedMinutes: 60,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  },
  {
    id: 't-ran-1',
    userId: 'rangika',
    title: 'HOD Daily Department Performance & Cash Position Sign-Off',
    category: 'Daily',
    timeSlot: '05:00 PM - 05:30 PM',
    allocatedMinutes: 30,
    actualMinutes: 0,
    status: 'pending',
    accepted: true,
    remark: '',
    subItems: []
  }
];

const INITIAL_MONTH_END_ITEMS = [
  {
    id: 'me-1',
    title: 'Complete All 81 Branch & Head Office Bank Reconciliations',
    ownerId: 'hansi',
    targetDate: '2026-11-28',
    dependency: 'Prerequisite for Cash Flows & P&L',
    progress: 72,
    status: 'in_progress'
  },
  {
    id: 'me-2',
    title: 'Preparing All Branch Cash Flows & Depreciation Entry',
    ownerId: 'nelka',
    targetDate: '2026-11-29',
    dependency: 'Requires Bank Reconciliations (81) >= 95%',
    progress: 35,
    status: 'in_progress'
  },
  {
    id: 'me-3',
    title: 'Home Appliance Final Report & Ledger Entry',
    ownerId: 'dinithi',
    targetDate: '2026-11-29',
    dependency: 'Requires BOC 962 Reconciliation',
    progress: 50,
    status: 'in_progress'
  },
  {
    id: 'me-4',
    title: 'WHT Ledger Tally, WHT Payment & IRD Details',
    ownerId: 'shani',
    targetDate: '2026-11-30',
    dependency: 'Requires Interest Entries Complete',
    progress: 60,
    status: 'in_progress'
  },
  {
    id: 'me-5',
    title: 'Branch, AI & Pawn PNL Preparing & Final Sign-Off',
    ownerId: 'nikeshala',
    targetDate: '2026-11-30',
    dependency: 'Requires Branch Cash Flows & Stock Tally',
    progress: 20,
    status: 'pending'
  }
];

function calculateTenure(joiningDateStr) {
  if (!joiningDateStr) return 'N/A';
  const start = new Date(joiningDateStr);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return `${Math.max(0, years)} Yrs, ${Math.max(0, months)} Mos`;
}

// Smart Rule-Based Assignee Suggestion Engine
function suggestAssigneeForDescription(desc) {
  const d = (desc || '').toUpperCase();
  if (d.includes('LOAN') || d.includes('VOUCHER') || d.includes('PETTY') || d.includes('962')) {
    return { userId: 'dinithi', reason: 'Loan/Voucher pattern' };
  }
  if (d.includes('SLIPS') || d.includes('OPD') || d.includes('STAFF') || d.includes('SUPPLIES')) {
    return { userId: 'charuka', reason: 'Supplier/SLIPS pattern' };
  }
  if (d.includes('WHT') || d.includes('INTEREST') || d.includes('CORPORATE') || d.includes('FD')) {
    return { userId: 'shani', reason: 'Interest/WHT pattern' };
  }
  if (d.includes('LEASING') || d.includes('COLLECTION') || d.includes('RECEIPT') || d.includes('TAX')) {
    return { userId: 'gayodya', reason: 'Collection/Tax pattern' };
  }
  if (d.includes('CHEQUE') || d.includes('LEGAL') || d.includes('WALLET')) {
    return { userId: 'dhanushka', reason: 'Cheque/Wallet pattern' };
  }
  if (d.includes('DEPRECIATION') || d.includes('CASH FLOW') || d.includes('ADVANCE')) {
    return { userId: 'nelka', reason: 'Cash Advance/Flow pattern' };
  }
  return null;
}

// 4-Stage Status Badge Component (Assigned -> Acknowledged -> Completed -> Approved)
function FourStageBadge({ status }) {
  const map = {
    assigned: { label: '1. Assigned', cls: 'bg-blue-50 text-blue-700 border-blue-200' },
    acknowledged: { label: '2. Acknowledged', cls: 'bg-amber-50 text-amber-800 border-amber-200' },
    completed: { label: '3. Completed', cls: 'bg-teal-50 text-teal-700 border-teal-200' },
    completed_pending_approval: { label: '3. Completed (Awaiting Approval)', cls: 'bg-amber-50 text-amber-800 border-amber-200' },
    approved: { label: '4. Approved ✓', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    rejected: { label: 'Returned for Rework', cls: 'bg-rose-50 text-rose-700 border-rose-200' },
    pending: { label: '1. Assigned / Pending', cls: 'bg-slate-100 text-slate-700 border-slate-200' }
  };
  const cfg = map[status] || map.pending;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-extrabold ${cfg.cls}`}>
      {cfg.label}
    </span>
  );
}

// ============================================================================
// 2. MAIN APPLICATION COMPONENT: FLi Pinnacle Workspace Hub
// ============================================================================

export default function App() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [eyeCareMode, setEyeCareMode] = useState(true);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({
    core: true,
    ops: true,
    gov: true,
    culture: true
  });

  // Live Clock & Weather (Kadawatha / Colombo, Sri Lanka)
  const [nowTime, setNowTime] = useState(new Date());
  const [weatherInfo, setWeatherInfo] = useState({ temp: '29°C', desc: 'Partly Cloudy', city: 'Kadawatha, LK' });

  // Attendance / Duty In
  const [dutyInRecords, setDutyInRecords] = useState({
    rangika: '08:22 AM',
    mahasen: '08:25 AM',
    kanishka: '08:27 AM',
    hansi: '08:28 AM',
    nayomi: '08:29 AM',
    dinithi: '08:24 AM',
    shani: '08:26 AM'
  });

  // Modals & Popovers
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showWifiPopover, setShowWifiPopover] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Tasks, Month-End & Reconciliations
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [monthEndItems, setMonthEndItems] = useState(INITIAL_MONTH_END_ITEMS);
  const [bankRecs, setBankRecs] = useState(INITIAL_BANK_RECS);
  const [quickLinks, setQuickLinks] = useState(INITIAL_QUICK_LINKS);

  // Allocated Statement Entries (4-stage status: assigned -> acknowledged -> completed -> approved, plus send-back & SLA aging)
  const [allocatedEntries, setAllocatedEntries] = useState([
    {
      id: 'ae-1',
      bank: 'Sampath Bank - 09810004042 (HO Main)',
      date: '2026-11-23',
      ref: 'SMP-0981-01',
      side: 'Debit',
      amount: 145000,
      balance: 2845000,
      desc: 'CEFTS TRF / LOAN DISB VOUCHER 4412 - K. PERERA',
      specialNote: 'Slip attached by Dinithi',
      highlighted: true,
      assigneeId: 'dinithi',
      acknowledged: false,
      ackAt: null,
      status: 'assigned',
      pendingReason: '',
      escalatedToId: null,
      escalatedMinutesAgo: 0,
      supervisorNote: ''
    },
    {
      id: 'ae-2',
      bank: 'Sampath Bank - 09810004042 (HO Main)',
      date: '2026-11-23',
      ref: 'SMP-0981-02',
      side: 'Debit',
      amount: 68500,
      balance: 2776500,
      desc: 'SLIPS PYMT / METROPOLITAN OFFICE SUPPLIES INV-892',
      specialNote: '',
      highlighted: false,
      assigneeId: 'charuka',
      acknowledged: true,
      ackAt: '09:12 AM',
      status: 'acknowledged',
      pendingReason: '',
      escalatedToId: 'nayomi',
      escalatedMinutesAgo: 48,
      supervisorNote: ''
    }
  ]);

  // Pending Approvals (Profile updates & Job detail modifications)
  const [profileRequests, setProfileRequests] = useState([]);
  const [jobUpdateRequests, setJobUpdateRequests] = useState([]);

  // Calendar Events (Everyone vs Specific Staff)
  const [calendarEvents, setCalendarEvents] = useState([
    {
      id: 'ce-1',
      date: '2026-11-23',
      type: 'reminder',
      title: '10:30 AM Tax Payment Cut-Off',
      assignedToId: 'everyone',
      createdById: 'rangika',
      status: 'approved'
    },
    {
      id: 'ce-2',
      date: '2026-11-23',
      type: 'scheduled_job',
      title: '05:00 PM Daily Cashbook & Voucher Filing',
      assignedToId: 'everyone',
      createdById: 'mahasen',
      status: 'approved'
    }
  ]);

  // Our Pledge Ratings (Selective +1 to +5 or Deduction -1 to -3)
  const [pledgeRatings, setPledgeRatings] = useState([
    {
      id: 'pr-1',
      toUserId: 'mahasen',
      fromUserId: 'rangika',
      scores: { 1: 5, 3: 5, 7: 5 },
      comment: 'Exceptional coaching and treasury oversight across the team.'
    }
  ]);

  // Office Wi-Fi Speed File Drop
  const [wifiFiles, setWifiFiles] = useState([
    {
      id: 'wf-1',
      name: 'Daily_Cashflow_Template_2026.xlsx',
      size: '420 KB',
      category: 'Cashflow',
      visibility: 'everyone',
      targetUserId: '',
      uploadedById: 'shani',
      time: '08:40 AM'
    }
  ]);

  // Chat Channels (Group & Individual 1-on-1 DMs)
  const [chatGroups] = useState([
    { id: 'grp-general', name: '# Finance General' },
    { id: 'grp-recs', name: '# Reconciliations' },
    { id: 'grp-entries', name: '# Daily Entries' }
  ]);
  const [activeChatChannel, setActiveChatChannel] = useState('grp-general');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'm-1',
      channelId: 'grp-general',
      senderId: 'rangika',
      text: 'Good morning team! Please ensure all morning bank balances and daily entries are updated on schedule.',
      time: '08:30 AM'
    },
    {
      id: 'm-2',
      channelId: 'grp-entries',
      senderId: 'dinithi',
      text: 'Morning payment slips have been attached and handed over to Shani.',
      time: '08:48 AM'
    }
  ]);
  const [chatPopupAlert, setChatPopupAlert] = useState(null);

  // Separate New Idea Hub & Feedback Box
  const [ideaCategories, setIdeaCategories] = useState(['Automation', 'Reconciliation', 'Cost Saving', 'Client Experience']);
  const [ideas, setIdeas] = useState([
    {
      id: 'id-1',
      title: 'Auto-Tag Recurring Branch Seylan Deposits',
      category: 'Reconciliation',
      desc: 'Group daily branch deposit references by branch code before voucher printing.',
      authorId: 'nelka',
      votes: 7
    }
  ]);
  const [feedbackCategories, setFeedbackCategories] = useState(['Appreciation', 'Workflow Support', 'IT & Systems', 'Workplace']);
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 'fb-1',
      category: 'Appreciation',
      text: 'Thank you Dinithi and Shani for smooth morning voucher handovers!',
      authorId: 'hansi',
      anonymous: false
    }
  ]);

  // Personal Notepad & Hydration Glass Tracker
  const [notesByUser, setNotesByUser] = useState({});
  const [waterGlassesByUser, setWaterGlassesByUser] = useState({});

  const currentUser = users.find(u => u.id === currentUserId) || null;
  const isSidebarOpen = isMobileNavOpen || isSidebarHovered || isSidebarPinned;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4200);
  };

  // Live Clock Tick
  useEffect(() => {
    const t = setInterval(() => setNowTime(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!isMobileNavOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileNavOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileNavOpen]);

  // Fetch Current Location Weather (Kadawatha / Colombo, Sri Lanka)
  useEffect(() => {
    const fetchWeather = async (lat, lon, cityLabel) => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await res.json();
        if (data?.current_weather) {
          const temp = `${Math.round(data.current_weather.temperature)}°C`;
          const code = data.current_weather.weathercode;
          const desc = code <= 1 ? 'Clear Sky' : code <= 3 ? 'Partly Cloudy' : code >= 51 ? 'Light Showers' : 'Fair';
          setWeatherInfo({ temp, desc, city: cityLabel });
        }
      } catch {
        // Keep default Kadawatha weather fallback
      }
    };
    fetchWeather(7.0019, 79.9528, 'Kadawatha, LK');
  }, []);

  // Time-based Greeting
  const hour = nowTime.getHours();
  const timeGreeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
  const formattedClock = nowTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dailyQuote = DAILY_QUOTES[nowTime.getDate() % DAILY_QUOTES.length];

  // Login Handler (Records First Duty-In Time)
  const handleLogin = (userId) => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setDutyInRecords(prev => (prev[userId] ? prev : { ...prev, [userId]: timeStr }));
    setCurrentUserId(userId);
    setActiveNav('dashboard');
    setShowWelcomeModal(true);
  };

  // Helper: Get all subordinates recursively
  const getSubordinateIds = (managerId) => {
    const direct = users.filter(u => u.supervisorId === managerId).map(u => u.id);
    let all = [...direct];
    direct.forEach(dId => {
      all = [...all, ...getSubordinateIds(dId)];
    });
    return all;
  };

  // Top Performer from Our Pledge Ratings
  const getTopPledgeLeader = () => {
    let bestUser = users[1];
    let bestAvg = 0;
    users.forEach(u => {
      const userRatings = pledgeRatings.filter(r => r.toUserId === u.id);
      if (userRatings.length > 0) {
        let sum = 0;
        let count = 0;
        userRatings.forEach(r => {
          Object.values(r.scores).forEach(val => {
            if (typeof val === 'number') {
              sum += val;
              count += 1;
            }
          });
        });
        const avg = count > 0 ? sum / count : 0;
        if (avg >= bestAvg) {
          bestAvg = avg;
          bestUser = u;
        }
      }
    });
    return { user: bestUser, avg: bestAvg > 0 ? bestAvg.toFixed(2) : '5.00' };
  };

  // Most Efficient Employee Today (Highest % of completed KPIs + Bank Recs)
  const getMostEfficientToday = () => {
    let leader = users[0];
    let highestPct = 0;
    users.forEach(u => {
      const uTasks = tasks.filter(t => t.userId === u.id && t.category === 'Daily');
      const uRecs = bankRecs.filter(r => r.userId === u.id);
      const total = uTasks.length + uRecs.length;
      const done =
        uTasks.filter(t => t.status === 'approved' || t.status === 'completed_pending_approval').length +
        uRecs.filter(r => r.status === 'completed').length;
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      if (pct >= highestPct) {
        highestPct = pct;
        leader = u;
      }
    });
    return { user: leader, pct: highestPct };
  };

  // Dinithi -> Shani Handover Acknowledgment
  const handleAcknowledgeDinithiHandover = () => {
    const startTimeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTasks(prev =>
      prev.map(t => {
        if (t.id === 't-din-1') {
          return {
            ...t,
            handoverAcknowledged: true,
            status: 'approved',
            remark: 'Payment slips acknowledged by Shani — Auto-Approved.'
          };
        }
        if (t.id === 't-sha-2') {
          return {
            ...t,
            timerStartedAt: startTimeStr,
            remark: `Timer started at ${startTimeStr} after Dinithi slip handover`
          };
        }
        return t;
      })
    );
    showToast(`Acknowledged Dinithi's slips! Dinithi's job approved & Shani's timer started (${startTimeStr}).`);
  };

  // Acknowledge All Allocated Entries (Auto-completes Shani's Daily Entries job & advances schedule)
  const handleAcknowledgeAllMyEntries = () => {
    if (!currentUser) return;
    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const updated = allocatedEntries.map(e =>
      e.assigneeId === currentUser.id && !e.acknowledged
        ? { ...e, acknowledged: true, ackAt: nowStr, status: 'acknowledged' }
        : e
    );
    setAllocatedEntries(updated);

    const anyUnacked = updated.some(e => e.assigneeId && !e.acknowledged);
    if (!anyUnacked && updated.length > 0) {
      setTasks(prev =>
        prev.map(t => {
          if (t.id === 't-sha-2') {
            return { ...t, status: 'approved', remark: 'All allocated staff acknowledged entries!' };
          }
          if (t.id === 't-sha-3') {
            return { ...t, accepted: true, remark: 'Auto-advanced from Daily Entries Sharing' };
          }
          return t;
        })
      );
      showToast('All entries acknowledged! Shani’s Daily Entries task completed & next scheduled task activated.');
    } else {
      showToast('Acknowledged all your allocated bank statement entries.');
    }
  };

  // Send Chat Message (Individual DM or Group)
  const handleSendChatMessage = (text, channelId = activeChatChannel) => {
    if (!text.trim() || !currentUser) return;
    const msg = {
      id: `m-${Date.now()}`,
      channelId,
      senderId: currentUser.id,
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages(prev => [...prev, msg]);
    setChatPopupAlert({ senderName: currentUser.name, text: msg.text, channelId });
    setTimeout(() => setChatPopupAlert(null), 4000);
  };

  if (!currentUser) {
    return (
      <LoginScreen
        users={users}
        onLogin={handleLogin}
        onActivateUser={(updatedUser) =>
          setUsers(prev => prev.map(u => (u.id === updatedUser.id ? updatedUser : u)))
        }
      />
    );
  }

  const subordinateIds = currentUser.isAdmin
    ? users.filter(u => u.id !== currentUser.id).map(u => u.id)
    : getSubordinateIds(currentUser.id);
  const canViewTeam = currentUser.isAdmin || subordinateIds.length > 0;

  const myTasks = tasks.filter(t => t.userId === currentUser.id);
  const myPendingTasks = myTasks.filter(t => t.status === 'pending' || t.status === 'rejected');
  const myPendingRecs = bankRecs.filter(r => r.userId === currentUser.id && r.status !== 'completed');
  const myUnackedEntries = allocatedEntries.filter(e => e.assigneeId === currentUser.id && !e.acknowledged);

  const pendingApprovalsCount =
    tasks.filter(t => subordinateIds.includes(t.userId) && t.status === 'completed_pending_approval').length +
    allocatedEntries.filter(e => subordinateIds.includes(e.assigneeId) && e.status === 'completed').length +
    profileRequests.filter(r => r.supervisorId === currentUser.id && r.status === 'pending').length +
    jobUpdateRequests.filter(r => r.supervisorId === currentUser.id && r.status === 'pending').length;

  const topPledge = getTopPledgeLeader();
  const topEfficient = getMostEfficientToday();

  const dinithiSlipsAcked = tasks.find(t => t.id === 't-din-1')?.handoverAcknowledged || false;
  const shaniAllocDone = tasks.find(t => t.id === 't-sha-2')?.status === 'approved';

  const navCategories = [
    {
      key: 'core',
      label: 'Core Workspace',
      items: [
        { id: 'dashboard', label: 'FLi Pinnacle', icon: Home, badge: null },
        { id: 'tasks', label: 'My Confidential JD & KPIs', icon: Clock, badge: myPendingTasks.length || null },
        { id: 'month-end', label: 'Month-End Closing Board', icon: Layers, badge: null }
      ]
    },
    {
      key: 'ops',
      label: 'Finance Operations',
      items: [
        {
          id: 'daily-entries',
          label: 'Daily Entries & Statements',
          icon: FileSpreadsheet,
          badge: myUnackedEntries.length || null
        },
        { id: 'reconciliations', label: 'Bank Reconciliations (81)', icon: Landmark, badge: myPendingRecs.length || null }
      ]
    },
    {
      key: 'gov',
      label: 'Team & Governance',
      items: [
        ...(canViewTeam
          ? [{ id: 'tree', label: 'Tree View & Approvals', icon: Users, badge: pendingApprovalsCount || null }]
          : []),
        { id: 'reports', label: 'Reports & Analytics (PDF)', icon: Printer, badge: null },
        ...(currentUser.isAdmin ? [{ id: 'admin', label: 'HOD Control Center', icon: Shield, badge: null }] : [])
      ]
    },
    {
      key: 'culture',
      label: 'Culture & Growth',
      items: [
        { id: 'pledge', label: 'Our Pledge (8 Principles)', icon: Award, badge: null },
        { id: 'ideas', label: 'New Idea Hub', icon: Lightbulb, badge: null },
        { id: 'feedback', label: 'Feedback Box', icon: Inbox, badge: null },
        { id: 'notepad', label: 'Personal Notepad', icon: StickyNote, badge: null },
        { id: 'games', label: 'Break-Time Games', icon: Gamepad2, badge: null },
        { id: 'profile', label: 'My Profile & Health', icon: User, badge: null }
      ]
    }
  ];

  // Eye-Comfort Background Token
  const rootBgClass = darkMode
    ? 'bg-[#081021] text-slate-100'
    : eyeCareMode
    ? 'bg-[#FBF9F3] text-slate-800'
    : 'bg-[#F6F8FB] text-slate-900';

  return (
    <div className={`app-root min-h-screen transition-colors duration-200 ${rootBgClass} ${darkMode ? 'dark' : ''}`}>
      {/* Left Hover-Expandable Icon-Rail Sidebar (No Bulky Scrollbar) */}
      <aside
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
        className={`app-sidebar fixed top-0 left-0 bottom-0 z-40 flex flex-col bg-[#0D2B5B] text-white border-r border-blue-950 shadow-xl transition-all duration-200 ${
          isSidebarOpen ? 'w-72' : 'w-[68px]'
        } ${isMobileNavOpen ? 'mobile-open' : ''}`}
      >
        {/* Brand Header with Crisp White Badge & Royal Blue "FLi" Letters */}
        <div className="h-16 px-3.5 flex items-center justify-between border-b border-blue-800/70 shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-white text-[#0D2B5B] border-2 border-amber-400 font-black text-base flex items-center justify-center shrink-0 shadow">
              FLi
            </div>
            {isSidebarOpen && (
              <div className="truncate bg-white px-2.5 py-1 rounded-xl border border-amber-300">
                <div className="font-black text-xs tracking-tight text-[#0D2B5B]">FLi Pinnacle</div>
                <div className="text-[9px] text-blue-700 font-bold uppercase tracking-wider">
                  Future Life Investments Limited
                </div>
              </div>
            )}
          </div>
          {isSidebarOpen && (
            <button
              onClick={() => setIsSidebarPinned(!isSidebarPinned)}
              title={isSidebarPinned ? 'Unpin Sidebar' : 'Pin Sidebar Open'}
              className={`p-1.5 rounded-lg transition ${
                isSidebarPinned ? 'bg-amber-400 text-[#0D2B5B]' : 'text-blue-200 hover:bg-blue-800'
              }`}
            >
              <Pin className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Navigation List (Hidden Scrollbar Track) */}
        <div
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          className="flex-1 overflow-y-auto py-3 px-2.5 space-y-4 [&::-webkit-scrollbar]:hidden"
        >
          {navCategories.map(cat => (
            <div key={cat.key} className="space-y-1">
              {isSidebarOpen && (
                <button
                  onClick={() => setOpenCategories(prev => ({ ...prev, [cat.key]: !prev[cat.key] }))}
                  className="w-full px-2 py-1 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-blue-300/80 hover:text-amber-300"
                >
                  <span>{cat.label}</span>
                  {openCategories[cat.key] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                </button>
              )}
              {(openCategories[cat.key] || !isSidebarOpen) &&
                cat.items.map(item => {
                  const Icon = item.icon;
                  const active = activeNav === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveNav(item.id);
                        setIsMobileNavOpen(false);
                      }}
                      aria-current={active ? 'page' : undefined}
                      title={!isSidebarOpen ? item.label : undefined}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition ${
                        active
                          ? 'bg-amber-400 text-[#0D2B5B] shadow-md'
                          : 'text-blue-100 hover:bg-blue-800/70 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon className="w-4 h-4 shrink-0" />
                        {isSidebarOpen && <span className="truncate">{item.label}</span>}
                      </div>
                      {isSidebarOpen && item.badge ? (
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                            active ? 'bg-[#0D2B5B] text-amber-300' : 'bg-amber-400 text-[#0D2B5B]'
                          }`}
                        >
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
            </div>
          ))}
        </div>

        {/* Sign Out */}
        <div className="p-2.5 border-t border-blue-800/70 shrink-0">
          <button
            onClick={() => {
              setCurrentUserId(null);
              setIsMobileNavOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-rose-200 hover:bg-rose-500/20 transition"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {isSidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {isMobileNavOpen && (
        <button
          type="button"
          className="app-mobile-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}

      {/* Main Content Container (Auto-fits smoothly when sidebar expands) */}
      <div className={`app-main-shell transition-all duration-200 ${isSidebarOpen ? 'pl-72' : 'pl-[68px]'}`}>
        {/* Top Utility Header */}
        <header
          className={`app-header sticky top-0 z-30 h-16 px-5 border-b backdrop-blur-md flex items-center justify-between gap-3 ${
            darkMode
              ? 'bg-[#0B1528]/90 border-slate-800'
              : eyeCareMode
              ? 'bg-[#FBF9F3]/95 border-amber-200/60'
              : 'bg-white/95 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileNavOpen}
              className="lg:hidden shrink-0 p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Menu className="w-5 h-5 text-[#0D2B5B] dark:text-amber-300" />
            </button>
            <div className="bg-white border-2 border-[#0D2B5B] px-3 py-1 rounded-xl flex items-center gap-2 shadow-sm">
              <span className="font-black text-sm text-[#0D2B5B] tracking-tight">FLi Pinnacle</span>
              <span className="text-[10px] font-bold text-blue-700 hidden sm:inline">
                • Future Life Investments Limited
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 text-xs font-bold text-[#0D2B5B] dark:text-blue-200">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>{formattedClock}</span>
              <span className="opacity-40">|</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                Duty In: {dutyInRecords[currentUser.id] || '08:30 AM'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Weather Badge */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
              <CloudSun className="w-4 h-4 text-amber-500" />
              <span>{weatherInfo.temp}</span>
              <span className="opacity-60 text-[11px]">({weatherInfo.city})</span>
            </div>

            {/* Eye-Care Soft Mode Toggle */}
            <button
              onClick={() => {
                setEyeCareMode(!eyeCareMode);
                if (darkMode) setDarkMode(false);
              }}
              title="Eye-Care Soft Mode (Warm Low-Glare Tint & Relaxed Spacing)"
              className={`px-3 py-1.5 rounded-xl border text-xs font-extrabold transition flex items-center gap-1.5 ${
                eyeCareMode && !darkMode
                  ? 'bg-amber-100/90 border-amber-300 text-amber-900'
                  : 'border-slate-200 dark:border-slate-700 opacity-75 hover:opacity-100'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden sm:inline">Eye-Care</span>
            </button>

            {/* Top-Right Icon-Only Wi-Fi LAN File Drop Trigger */}
            <div className="relative">
              <button
                className={`app-header-wifi p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 text-[#0D2B5B] dark:text-amber-300 border border-blue-200/70 dark:border-slate-700 hover:bg-amber-400 hover:text-[#0D2B5B] transition relative`}
                onClick={() => setShowWifiPopover(!showWifiPopover)}
                title="Office Wi-Fi Speed File Drop"
                aria-label="Open office file sharing"
              >
                <Wifi className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
              </button>

              {showWifiPopover && (
                <div
                  className={`absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl border shadow-2xl p-4 z-50 ${
                    darkMode ? 'bg-[#0F1B33] border-slate-700' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 font-extrabold text-xs text-[#0D2B5B] dark:text-amber-300">
                      <Wifi className="w-4 h-4 text-emerald-500" />
                      <span>Office Wi-Fi Speed File Drop</span>
                    </div>
                    <button onClick={() => setShowWifiPopover(false)} className="opacity-60 hover:opacity-100">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <WifiQuickDropForm
                    users={users}
                    currentUser={currentUser}
                    wifiFiles={wifiFiles}
                    onUpload={(newFile) => {
                      setWifiFiles(prev => [newFile, ...prev]);
                      showToast(`Shared ${newFile.name} over Office LAN!`);
                    }}
                  />
                </div>
              )}
            </div>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle Dark / Light Mode"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#0D2B5B]" />}
            </button>

            {/* User Profile Pill */}
            <button
              onClick={() => setActiveNav('profile')}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-[#0D2B5B] text-white hover:bg-blue-900 transition"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-400 text-[#0D2B5B] font-black text-xs flex items-center justify-center overflow-hidden">
                {currentUser.photoUrl ? (
                  <img src={currentUser.photoUrl} alt={currentUser.name} className="w-full h-full object-cover" />
                ) : (
                  currentUser.name.charAt(0)
                )}
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-xs font-extrabold leading-tight">{currentUser.name.split(' ')[0]}</div>
                <div className="text-[10px] text-amber-300 font-semibold leading-tight">{currentUser.brainColor} Brain</div>
              </div>
            </button>
          </div>
        </header>

        {/* Toast Notification Banner */}
        {toastMessage && (
          <div className="fixed top-20 right-5 z-50 max-w-md bg-[#0D2B5B] text-white border-l-4 border-amber-400 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Dinithi -> Shani Handover Alert Banner for Shani */}
        {currentUser.id === 'shani' && !dinithiSlipsAcked && (
          <div className="mx-5 mt-4 p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-300 flex flex-wrap items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <div className="text-xs font-black text-[#0D2B5B] dark:text-amber-200">
                  Handover Alert from Dinithi Perera (08:30 AM – 08:50 AM)
                </div>
                <div className="text-xs opacity-80">
                  Dinithi has attached morning payment slips and handed them over. Acknowledge to approve Dinithi’s task and start your Daily Entries timer.
                </div>
              </div>
            </div>
            <button
              onClick={handleAcknowledgeDinithiHandover}
              className="px-4 py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-extrabold text-xs hover:bg-blue-900 transition"
            >
              Acknowledge Payment Slips &amp; Start Timer
            </button>
          </div>
        )}

        {/* Active View Content */}
        <main className="px-3 py-4 sm:p-5 max-w-[1440px] mx-auto">
          {activeNav === 'dashboard' && (
            <BentoDashboardHub
              currentUser={currentUser}
              users={users}
              darkMode={darkMode}
              eyeCareMode={eyeCareMode}
              timeGreeting={timeGreeting}
              formattedClock={formattedClock}
              dutyInTime={dutyInRecords[currentUser.id] || '08:30 AM'}
              dailyQuote={dailyQuote}
              weatherInfo={weatherInfo}
              quickLinks={quickLinks}
              onAddQuickLink={(ql) => setQuickLinks(prev => [...prev, ql])}
              tasks={tasks}
              bankRecs={bankRecs}
              allocatedEntries={allocatedEntries}
              dinithiSlipsAcked={dinithiSlipsAcked}
              shaniAllocDone={shaniAllocDone}
              topPledge={topPledge}
              topEfficient={topEfficient}
              calendarEvents={calendarEvents}
              onAddCalendarEvent={(ev) => setCalendarEvents(prev => [...prev, ev])}
              waterGlasses={waterGlassesByUser[currentUser.id] || 2}
              onAddWaterGlass={() =>
                setWaterGlassesByUser(prev => ({ ...prev, [currentUser.id]: (prev[currentUser.id] || 2) + 1 }))
              }
              onNavigate={setActiveNav}
              onOpenDirectChat={(colleagueId) => {
                const dmId = `dm-${[currentUser.id, colleagueId].sort().join('-')}`;
                setActiveChatChannel(dmId);
                setShowChatWidget(true);
              }}
              showToast={showToast}
            />
          )}

          {activeNav === 'tasks' && (
            <MyTasksWorkspace
              currentUser={currentUser}
              users={users}
              tasks={myTasks}
              darkMode={darkMode}
              eyeCareMode={eyeCareMode}
              onAcceptTask={(taskId) => {
                setTasks(prev => prev.map(t => (t.id === taskId ? { ...t, accepted: true } : t)));
                showToast('Task accepted into your active queue.');
              }}
              onHandoverTask={(taskId, targetUserId) => {
                const target = users.find(u => u.id === targetUserId);
                setTasks(prev =>
                  prev.map(t =>
                    t.id === taskId
                      ? { ...t, userId: targetUserId, accepted: false, remark: `Handed over by ${currentUser.name}` }
                      : t
                  )
                );
                showToast(`Handed over task to ${target?.name}.`);
              }}
              onCompleteTask={(taskId, actualMins, remark) => {
                setTasks(prev =>
                  prev.map(t =>
                    t.id === taskId
                      ? {
                          ...t,
                          status: currentUser.isAdmin ? 'approved' : 'completed_pending_approval',
                          actualMinutes: actualMins || t.allocatedMinutes,
                          remark
                        }
                      : t
                  )
                );
                showToast('Task marked complete & submitted to your Superior for approval!');
              }}
              onToggleSubItem={(taskId, subId) => {
                setTasks(prev =>
                  prev.map(t =>
                    t.id === taskId
                      ? {
                          ...t,
                          subItems: t.subItems.map(s => (s.id === subId ? { ...s, done: !s.done } : s))
                        }
                      : t
                  )
                );
              }}
              onEscalateSubItem={(taskId, subId, reason) => {
                const sup = users.find(u => u.id === currentUser.supervisorId);
                setTasks(prev =>
                  prev.map(t =>
                    t.id === taskId
                      ? {
                          ...t,
                          subItems: t.subItems.map(s =>
                            s.id === subId ? { ...s, escalated: true, escalationReason: reason } : s
                          )
                        }
                      : t
                  )
                );
                showToast(`Escalated item to ${sup?.name || 'Superior'} for assistance.`);
              }}
              onRequestJobDetailUpdate={(req) => {
                setJobUpdateRequests(prev => [...prev, req]);
                showToast('Job detail update sent to your Next Superior for approval.');
              }}
            />
          )}

          {activeNav === 'month-end' && (
            <MonthEndClosingPortal
              currentUser={currentUser}
              users={users}
              monthEndItems={monthEndItems}
              bankRecs={bankRecs}
              darkMode={darkMode}
              onUpdateProgress={(id, progress) => {
                setMonthEndItems(prev =>
                  prev.map(m =>
                    m.id === id
                      ? { ...m, progress, status: progress >= 100 ? 'completed' : 'in_progress' }
                      : m
                  )
                );
                showToast('Month-End closing progress updated.');
              }}
              onAddItem={(item) => {
                setMonthEndItems(prev => [...prev, item]);
                showToast('Added item to Month-End Closing Checklist.');
              }}
            />
          )}

          {activeNav === 'reconciliations' && (
            <BankReconciliationPortal
              currentUser={currentUser}
              users={users}
              bankRecs={bankRecs}
              darkMode={darkMode}
              eyeCareMode={eyeCareMode}
              onToggleRec={(recId) => {
                setBankRecs(prev =>
                  prev.map(r =>
                    r.id === recId
                      ? {
                          ...r,
                          status: r.status === 'completed' ? 'pending' : 'completed',
                          tag: r.status === 'completed' ? r.tag : 'Matched'
                        }
                      : r
                  )
                );
                showToast('Bank reconciliation status updated.');
              }}
              onUpdateRemark={(recId, remark) => {
                setBankRecs(prev => prev.map(r => (r.id === recId ? { ...r, remark } : r)));
              }}
              onUpdateTag={(recId, tag) => {
                setBankRecs(prev => prev.map(r => (r.id === recId ? { ...r, tag } : r)));
                showToast(`Reconciliation tagged as "${tag}".`);
              }}
              onReassignRec={(recId, newUserId) => {
                setBankRecs(prev => prev.map(r => (r.id === recId ? { ...r, userId: newUserId } : r)));
                showToast('Bank account reassigned.');
              }}
            />
          )}

          {activeNav === 'daily-entries' && (
            <DailyEntriesAllocationPortal
              currentUser={currentUser}
              users={users}
              darkMode={darkMode}
              eyeCareMode={eyeCareMode}
              allocatedEntries={allocatedEntries}
              onPublishAllocations={(newItems) => {
                setAllocatedEntries(newItems);
                showToast(`Published & handed over ${newItems.length} statement transactions!`);
              }}
              onAcknowledgeOne={(entryId) => {
                const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                setAllocatedEntries(prev =>
                  prev.map(e =>
                    e.id === entryId ? { ...e, acknowledged: true, ackAt: nowStr, status: 'acknowledged' } : e
                  )
                );
                showToast('Entry acknowledged & timer started.');
              }}
              onAcknowledgeAll={handleAcknowledgeAllMyEntries}
              onCompleteEntries={(ids) => {
                setAllocatedEntries(prev =>
                  prev.map(e => (ids.includes(e.id) ? { ...e, status: 'completed' } : e))
                );
                showToast(`Marked ${ids.length} entry item(s) as Completed!`);
              }}
              onSetPendingReason={(entryId, reason) => {
                setAllocatedEntries(prev =>
                  prev.map(e => (e.id === entryId ? { ...e, pendingReason: reason } : e))
                );
              }}
              onEscalateEntries={(ids, reason) => {
                const supId = currentUser.supervisorId || 'rangika';
                const sup = users.find(u => u.id === supId);
                setAllocatedEntries(prev =>
                  prev.map(e =>
                    ids.includes(e.id)
                      ? {
                          ...e,
                          escalatedToId: supId,
                          escalatedMinutesAgo: 1,
                          pendingReason: reason || 'Help requested from Superior'
                        }
                      : e
                  )
                );
                showToast(`Transferred ${ids.length} entry item(s) to ${sup?.name} for help.`);
              }}
            />
          )}

          {activeNav === 'tree' && (
            <TeamTreeApprovalView
              currentUser={currentUser}
              users={users}
              subordinateIds={subordinateIds}
              tasks={tasks}
              bankRecs={bankRecs}
              allocatedEntries={allocatedEntries}
              profileRequests={profileRequests}
              jobUpdateRequests={jobUpdateRequests}
              darkMode={darkMode}
              onApproveTask={(taskId) => {
                setTasks(prev => prev.map(t => (t.id === taskId ? { ...t, status: 'approved' } : t)));
                showToast('Task approved!');
              }}
              onRejectTask={(taskId, note) => {
                setTasks(prev =>
                  prev.map(t => (t.id === taskId ? { ...t, status: 'rejected', remark: `Returned: ${note}` } : t))
                );
                showToast('Task returned to employee with rework reason.');
              }}
              onApproveEntry={(entryId) => {
                setAllocatedEntries(prev =>
                  prev.map(e => (e.id === entryId ? { ...e, status: 'approved', escalatedToId: null } : e))
                );
                showToast('Allocated statement entry approved!');
              }}
              onSendBackEntry={(entryId, reason) => {
                setAllocatedEntries(prev =>
                  prev.map(e =>
                    e.id === entryId
                      ? {
                          ...e,
                          status: 'rejected',
                          escalatedToId: null,
                          supervisorNote: reason,
                          pendingReason: `Returned by Supervisor: ${reason}`
                        }
                      : e
                  )
                );
                showToast('Entry sent back to employee with rework note.');
              }}
              onApproveProfileReq={(reqId) => {
                const req = profileRequests.find(r => r.id === reqId);
                if (req) {
                  setUsers(prev => prev.map(u => (u.id === req.userId ? { ...u, ...req.updates } : u)));
                  setProfileRequests(prev => prev.map(r => (r.id === reqId ? { ...r, status: 'approved' } : r)));
                  showToast('Employee profile update approved & published!');
                }
              }}
              onApproveJobDetailReq={(reqId) => {
                const req = jobUpdateRequests.find(r => r.id === reqId);
                if (req) {
                  setTasks(prev =>
                    prev.map(t =>
                      t.id === req.taskId
                        ? { ...t, title: req.newTitle, timeSlot: req.newTimeSlot, remark: req.newNotes }
                        : t
                    )
                  );
                  setJobUpdateRequests(prev => prev.map(r => (r.id === reqId ? { ...r, status: 'approved' } : r)));
                  showToast('Job detail modification approved!');
                }
              }}
              onToggleLeaveCoverage={(targetUserId, onLeave, coveringUserId) => {
                setUsers(prev =>
                  prev.map(u => (u.id === targetUserId ? { ...u, onLeave, coveringUserId } : u))
                );
                if (onLeave && coveringUserId) {
                  setTasks(prev =>
                    prev.map(t =>
                      t.userId === targetUserId && t.status === 'pending'
                        ? { ...t, userId: coveringUserId, remark: 'Covering leave reassignment' }
                        : t
                    )
                  );
                  showToast('Staff marked On Leave & pending tasks reassigned to covering officer.');
                } else {
                  showToast('Leave status updated.');
                }
              }}
            />
          )}

          {activeNav === 'reports' && (
            <ReportsAnalyticsPortal
              currentUser={currentUser}
              users={users}
              tasks={tasks}
              bankRecs={bankRecs}
              allocatedEntries={allocatedEntries}
              dutyInRecords={dutyInRecords}
              darkMode={darkMode}
            />
          )}

          {activeNav === 'profile' && (
            <EmployeeProfileSettings
              currentUser={currentUser}
              users={users}
              darkMode={darkMode}
              onSubmitProfileUpdate={(updates) => {
                if (currentUser.isAdmin || !currentUser.supervisorId) {
                  setUsers(prev => prev.map(u => (u.id === currentUser.id ? { ...u, ...updates } : u)));
                  showToast('Profile updated directly!');
                } else {
                  setProfileRequests(prev => [
                    ...prev,
                    {
                      id: `prq-${Date.now()}`,
                      userId: currentUser.id,
                      supervisorId: currentUser.supervisorId,
                      updates,
                      status: 'pending'
                    }
                  ]);
                  showToast('Profile update submitted to your Next Superior for approval!');
                }
              }}
            />
          )}

          {activeNav === 'admin' && currentUser.isAdmin && (
            <ManagerAdminPanel
              users={users}
              tasks={tasks}
              dutyInRecords={dutyInRecords}
              bankRecs={bankRecs}
              darkMode={darkMode}
              onUpdateUser={(id, patch) => {
                setUsers(prev => prev.map(u => (u.id === id ? { ...u, ...patch } : u)));
                showToast('Staff record updated by HOD.');
              }}
              onAddTask={(newT) => {
                setTasks(prev => [...prev, newT]);
                showToast('New KPI / Task assigned.');
              }}
              onUpdateTask={(id, patch) => {
                setTasks(prev => prev.map(t => (t.id === id ? { ...t, ...patch } : t)));
                showToast('KPI / JD updated.');
              }}
            />
          )}

          {activeNav === 'pledge' && (
            <OurPledgeRatingPortal
              currentUser={currentUser}
              users={users}
              topPledge={topPledge}
              darkMode={darkMode}
              onSubmitRating={(ratingObj) => {
                setPledgeRatings(prev => [ratingObj, ...prev]);
                showToast('Our Pledge evaluation submitted!');
              }}
            />
          )}

          {activeNav === 'ideas' && (
            <IdeaHubPortal
              currentUser={currentUser}
              users={users}
              ideas={ideas}
              categories={ideaCategories}
              darkMode={darkMode}
              onAddCategory={(c) => setIdeaCategories(prev => [...prev, c])}
              onAddIdea={(idea) => {
                setIdeas(prev => [idea, ...prev]);
                showToast('New idea posted to FLi Pinnacle Idea Hub!');
              }}
              onVoteIdea={(id) =>
                setIdeas(prev => prev.map(i => (i.id === id ? { ...i, votes: i.votes + 1 } : i)))
              }
            />
          )}

          {activeNav === 'feedback' && (
            <FeedbackBoxPortal
              currentUser={currentUser}
              users={users}
              feedbacks={feedbacks}
              categories={feedbackCategories}
              darkMode={darkMode}
              onAddCategory={(c) => setFeedbackCategories(prev => [...prev, c])}
              onAddFeedback={(fb) => {
                setFeedbacks(prev => [fb, ...prev]);
                showToast('Feedback submitted!');
              }}
            />
          )}

          {activeNav === 'notepad' && (
            <PersonalNotepadPortal
              currentUser={currentUser}
              notes={notesByUser[currentUser.id] || []}
              darkMode={darkMode}
              onUpdateNotes={(updated) => setNotesByUser(prev => ({ ...prev, [currentUser.id]: updated }))}
            />
          )}

          {activeNav === 'games' && <BreakTimeGamePortal darkMode={darkMode} />}
        </main>
      </div>

      {/* Bottom-Right Floating Instant Messenger Widget (Group & Individual 1-on-1) */}
      <div className="fixed bottom-5 right-5 z-40">
        {showChatWidget ? (
          <div
            className={`w-80 sm:w-96 rounded-3xl border shadow-2xl overflow-hidden ${
              darkMode ? 'bg-[#0F1B33] border-slate-700' : 'bg-white border-slate-200'
            }`}
          >
            <div className="p-3.5 bg-[#0D2B5B] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-extrabold">FLi Instant Messenger (Group &amp; 1-on-1)</span>
              </div>
              <button onClick={() => setShowChatWidget(false)} className="text-blue-200 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2 border-b border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="flex gap-1 overflow-x-auto">
                {chatGroups.map(g => (
                  <button
                    key={g.id}
                    onClick={() => setActiveChatChannel(g.id)}
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-extrabold whitespace-nowrap ${
                      activeChatChannel === g.id ? 'bg-amber-400 text-[#0D2B5B]' : 'bg-slate-100 dark:bg-slate-800'
                    }`}
                  >
                    {g.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold opacity-70 whitespace-nowrap">Direct (1-on-1):</span>
                <select
                  value={activeChatChannel.startsWith('dm-') ? activeChatChannel : ''}
                  onChange={e => {
                    if (e.target.value) setActiveChatChannel(e.target.value);
                  }}
                  className="flex-1 px-2 py-1 rounded-xl border text-[10px] font-bold bg-transparent"
                >
                  <option value="" className="text-slate-900">
                    -- Select Colleague --
                  </option>
                  {users
                    .filter(u => u.id !== currentUser.id)
                    .map(u => {
                      const dmId = `dm-${[currentUser.id, u.id].sort().join('-')}`;
                      return (
                        <option key={u.id} value={dmId} className="text-slate-900">
                          {u.name} ({u.roleTitle})
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="h-56 overflow-y-auto p-3 space-y-2 text-xs">
              {chatMessages
                .filter(m => m.channelId === activeChatChannel)
                .map(m => {
                  const sender = users.find(u => u.id === m.senderId);
                  const isMe = m.senderId === currentUser.id;
                  return (
                    <div key={m.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                      <span className="text-[10px] opacity-60 mb-0.5">
                        {sender?.name.split(' ')[0]} • {m.time}
                      </span>
                      <div
                        className={`px-3 py-2 rounded-2xl max-w-[82%] font-medium ${
                          isMe ? 'bg-[#0D2B5B] text-white' : 'bg-slate-100 dark:bg-slate-800'
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  );
                })}
            </div>
            <ChatInputBox onSend={(txt) => handleSendChatMessage(txt, activeChatChannel)} />
          </div>
        ) : (
          <button
            onClick={() => setShowChatWidget(true)}
            title="Open FLi Instant Messenger"
            className="p-3.5 rounded-2xl bg-[#0D2B5B] text-amber-300 border-2 border-amber-400 shadow-xl hover:scale-105 transition flex items-center justify-center relative"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
          </button>
        )}
      </div>

      {/* Chat Toast Alert */}
      {chatPopupAlert && !showChatWidget && (
        <div
          onClick={() => {
            setActiveChatChannel(chatPopupAlert.channelId);
            setShowChatWidget(true);
            setChatPopupAlert(null);
          }}
          className="fixed bottom-20 right-5 z-40 w-72 p-3 rounded-2xl bg-[#0D2B5B] text-white border border-amber-400 shadow-xl cursor-pointer text-xs"
        >
          <div className="font-extrabold text-amber-300">{chatPopupAlert.senderName}</div>
          <div className="truncate opacity-90">{chatPopupAlert.text}</div>
        </div>
      )}

      {/* Login Welcome Briefing Modal */}
      {showWelcomeModal && (
        <WelcomeBriefingModal
          currentUser={currentUser}
          timeGreeting={timeGreeting}
          formattedClock={formattedClock}
          dutyInTime={dutyInRecords[currentUser.id] || '08:30 AM'}
          dailyQuote={dailyQuote}
          weatherInfo={weatherInfo}
          pendingTasksCount={myPendingTasks.length}
          pendingRecsCount={myPendingRecs.length}
          unackedEntriesCount={myUnackedEntries.length}
          onClose={() => setShowWelcomeModal(false)}
        />
      )}
    </div>
  );
}

// ============================================================================
// 3. CURVED SLIDING SPLIT-PANEL LOGIN & ACTIVATION SCREEN
// ============================================================================

function LoginScreen({ users, onLogin, onActivateUser }) {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showDemoList, setShowDemoList] = useState(false);
  const [identifier, setIdentifier] = useState('rangika');
  const [pin, setPin] = useState('1234');
  const [error, setError] = useState('');

  const [actEmpId, setActEmpId] = useState('dinithi');
  const [actPhone, setActPhone] = useState('');
  const [actNewPin, setActNewPin] = useState('1234');

  const handleSignIn = (e) => {
    e.preventDefault();
    const q = identifier.trim().toLowerCase();
    const found = users.find(
      u =>
        u.id.toLowerCase() === q ||
        u.empCode.toLowerCase() === q ||
        u.email.toLowerCase() === q ||
        u.name.toLowerCase().includes(q)
    );
    if (!found) {
      setError('Staff ID or Email not found. Try e.g. rangika, shani, dinithi, kanishka.');
      return;
    }
    if (found.pin !== pin.trim()) {
      setError('Invalid Security PIN (default demo PIN is 1234).');
      return;
    }
    setError('');
    onLogin(found.id);
  };

  const handleActivate = (e) => {
    e.preventDefault();
    const found = users.find(u => u.id === actEmpId);
    if (!found) return;
    onActivateUser({ ...found, pin: actNewPin.trim() || '1234', phone: actPhone.trim() || found.phone });
    setIdentifier(found.id);
    setPin(actNewPin.trim() || '1234');
    setIsRegisterMode(false);
    setError('');
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB] flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl min-h-[540px] bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Form Panel */}
        <div className="p-8 sm:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-white border-2 border-[#0D2B5B] text-[#0D2B5B] font-black text-lg flex items-center justify-center shadow-sm">
              FLi
            </div>
            <div>
              <h1 className="font-black text-xl text-[#0D2B5B] tracking-tight">FLi Pinnacle</h1>
              <p className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                Future Life Investments Limited • Finance Workspace
              </p>
            </div>
          </div>

          {!isRegisterMode ? (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Sign In</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  First login of the day automatically records your Duty-In attendance.
                </p>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Employee Username / Corporate Email
                </label>
                <input
                  type="text"
                  value={identifier}
                  onChange={e => setIdentifier(e.target.value)}
                  placeholder="e.g. rangika, shani, dinithi"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#0D2B5B]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Security PIN</label>
                <input
                  type="password"
                  value={pin}
                  onChange={e => setPin(e.target.value)}
                  placeholder="••••"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#0D2B5B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-[#0D2B5B] text-amber-300 font-black text-sm hover:bg-blue-900 transition shadow-md"
              >
                Sign In &amp; Record Duty In
              </button>

              {/* Collapsible Demo Staff Directory Helper */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowDemoList(!showDemoList)}
                  className="text-[11px] font-extrabold text-[#0D2B5B] hover:underline flex items-center gap-1"
                >
                  <span>{showDemoList ? 'Hide' : 'Show'} Demo Staff Directory (PIN: 1234)</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showDemoList ? 'rotate-180' : ''}`} />
                </button>
                {showDemoList && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {users.map(u => (
                      <button
                        key={u.id}
                        type="button"
                        onClick={() => {
                          setIdentifier(u.id);
                          setPin('1234');
                        }}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#0D2B5B] border border-blue-200 text-[10px] font-extrabold capitalize hover:bg-amber-400 transition"
                      >
                        {u.id} ({u.brainColor})
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </form>
          ) : (
            <form onSubmit={handleActivate} className="space-y-4">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Activate / Reset PIN</h2>
                <p className="text-xs text-slate-500 mt-0.5">Update your contact number &amp; personal login PIN.</p>
              </div>
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Select Staff Profile</label>
                <select
                  value={actEmpId}
                  onChange={e => setActEmpId(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900"
                >
                  {users.map(u => (
                    <option key={u.id} value={u.id}>
                      {u.name} ({u.empCode})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Mobile Number</label>
                <input
                  type="text"
                  value={actPhone}
                  onChange={e => setActPhone(e.target.value)}
                  placeholder="070-XXXXXXX"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">New Security PIN</label>
                <input
                  type="password"
                  value={actNewPin}
                  onChange={e => setActNewPin(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-amber-400 text-[#0D2B5B] font-black text-sm hover:bg-amber-300 transition shadow-md"
              >
                Save &amp; Return to Login
              </button>
            </form>
          )}
        </div>

        {/* Right Curved Royal Blue & Gold Welcome Panel */}
        <div className="bg-gradient-to-br from-[#0D2B5B] via-[#153E82] to-[#0A2249] text-white p-10 flex flex-col items-center justify-center text-center md:rounded-l-[110px] border-l-4 border-amber-400">
          <div className="w-16 h-16 rounded-3xl bg-white text-[#0D2B5B] border-2 border-amber-400 font-black text-2xl flex items-center justify-center shadow-xl mb-5">
            FLi
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-2">
            {isRegisterMode ? 'Welcome Back!' : 'Hello, Team FLi!'}
          </h2>
          <p className="text-xs text-blue-100 max-w-xs leading-relaxed mb-6">
            {isRegisterMode
              ? 'Already activated your FLi Pinnacle finance account? Sign in with your corporate ID and PIN.'
              : 'Need to set a new PIN or verify your Future Life Investments Limited staff profile? Activate your credentials here.'}
          </p>
          <button
            type="button"
            onClick={() => setIsRegisterMode(!isRegisterMode)}
            className="px-8 py-3 rounded-2xl border-2 border-amber-400 text-amber-300 font-black text-xs uppercase tracking-wider hover:bg-amber-400 hover:text-[#0D2B5B] transition"
          >
            {isRegisterMode ? 'Sign In' : 'Activate / Reset PIN'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. WELCOME BRIEFING MODAL (Time Greeting + Duty In + Quote + Weather)
// ============================================================================

function WelcomeBriefingModal({
  currentUser,
  timeGreeting,
  formattedClock,
  dutyInTime,
  dailyQuote,
  weatherInfo,
  pendingTasksCount,
  pendingRecsCount,
  unackedEntriesCount,
  onClose
}) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/55 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#0F1B33] border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-[#0D2B5B] to-[#174287] text-white border-b-4 border-amber-400">
          <div className="flex items-center justify-between text-xs font-bold text-amber-300 mb-1">
            <span>
              {formattedClock} • Duty In Recorded: {dutyInTime}
            </span>
            <span>
              {weatherInfo.temp} • {weatherInfo.city}
            </span>
          </div>
          <h2 className="text-2xl font-black tracking-tight">
            {timeGreeting}, {currentUser.name.split(' ')[0]}!
          </h2>
          <p className="text-xs text-blue-100 mt-0.5">
            {currentUser.roleTitle} • Future Life Investments Limited
          </p>

          <div className="mt-4 p-3 rounded-2xl bg-white/10 border border-white/15 text-xs italic text-amber-100">
            “{dailyQuote.text}” — <span className="not-italic font-extrabold text-amber-300">{dailyQuote.author}</span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-black text-[#0D2B5B] dark:text-amber-300">{pendingTasksCount}</div>
              <div className="text-[11px] font-bold opacity-75">Pending KPIs</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-black text-amber-600">{pendingRecsCount}</div>
              <div className="text-[11px] font-bold opacity-75">Pending Recs</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-black text-emerald-600">{unackedEntriesCount}</div>
              <div className="text-[11px] font-bold opacity-75">New Entries</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl bg-[#0D2B5B] text-amber-300 font-black text-xs uppercase tracking-wider hover:bg-blue-900 transition"
          >
            Enter FLi Pinnacle Workspace →
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. FLi PINNACLE MAIN DASHBOARD HUB (Calm, Eye-Friendly & Structured)
// ============================================================================

function BentoDashboardHub({
  currentUser,
  users,
  darkMode,
  eyeCareMode,
  timeGreeting,
  formattedClock,
  dutyInTime,
  dailyQuote,
  weatherInfo,
  quickLinks,
  onAddQuickLink,
  tasks,
  bankRecs,
  allocatedEntries,
  dinithiSlipsAcked,
  shaniAllocDone,
  topPledge,
  topEfficient,
  calendarEvents,
  onAddCalendarEvent,
  waterGlasses,
  onAddWaterGlass,
  onNavigate,
  onOpenDirectChat,
  showToast
}) {
  const [showAddLink, setShowAddLink] = useState(false);
  const [newLinkName, setNewLinkName] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');

  // Monthly Calendar State
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOffset = new Date(year, month, 1).getDay();
  const [selectedCalDate, setSelectedCalDate] = useState(today.toISOString().split('T')[0]);
  const [calItemType, setCalItemType] = useState('reminder');
  const [calTitle, setCalTitle] = useState('');
  const [calAssigneeId, setCalAssigneeId] = useState('everyone');

  const cardSurface = darkMode
    ? 'bg-[#0F1B33] border-slate-800'
    : eyeCareMode
    ? 'bg-white border-amber-200/70 shadow-sm'
    : 'bg-white border-slate-200 shadow-sm';

  const myDailyTasks = tasks.filter(t => t.userId === currentUser.id && t.category === 'Daily');
  const completedDaily = myDailyTasks.filter(
    t => t.status === 'approved' || t.status === 'completed_pending_approval'
  ).length;
  const myPct = myDailyTasks.length > 0 ? Math.round((completedDaily / myDailyTasks.length) * 100) : 0;

  const weightKg = currentUser.health?.weightKg || 60;
  const targetMl = Math.round(weightKg * 35);
  const targetGlasses = Math.max(6, Math.round(targetMl / 250));

  const entriesAckedCount = allocatedEntries.filter(e => e.acknowledged).length;

  const handleAddCalendarItem = (e) => {
    e.preventDefault();
    if (!calTitle.trim()) return;
    const isSelfReminder = calItemType === 'reminder' && calAssigneeId === currentUser.id;
    const needsApproval = !currentUser.isAdmin && !isSelfReminder && calAssigneeId !== 'everyone';
    onAddCalendarEvent({
      id: `ce-${Date.now()}`,
      date: selectedCalDate,
      type: calItemType,
      title: calTitle.trim(),
      assignedToId: calAssigneeId,
      createdById: currentUser.id,
      status: needsApproval ? 'pending' : 'approved'
    });
    setCalTitle('');
    showToast(
      calAssigneeId === 'everyone'
        ? 'Scheduled for Everyone on the department calendar!'
        : needsApproval
        ? 'Scheduled job submitted for Superior approval!'
        : 'Added to Monthly Calendar!'
    );
  };

  return (
    <div className="space-y-5">
      {/* 1. Quick Access Corporate Portals Bar */}
      <div className={`p-4 rounded-3xl border ${cardSurface}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0D2B5B] dark:text-amber-300">
            <Globe className="w-4 h-4 text-amber-500" />
            <span>Quick Access Corporate Portals</span>
          </div>
          <button
            onClick={() => setShowAddLink(!showAddLink)}
            className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#0D2B5B] dark:text-amber-300 text-xs font-extrabold hover:bg-amber-400 hover:text-[#0D2B5B] transition"
          >
            + Add Link
          </button>
        </div>

        {showAddLink && (
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!newLinkName.trim() || !newLinkUrl.trim()) return;
              onAddQuickLink({
                id: `ql-${Date.now()}`,
                name: newLinkName.trim(),
                desc: 'Custom Portal',
                url: newLinkUrl.startsWith('http') ? newLinkUrl.trim() : `https://${newLinkUrl.trim()}`,
                tag: 'Custom'
              });
              setNewLinkName('');
              setNewLinkUrl('');
              setShowAddLink(false);
              showToast('Quick link added!');
            }}
            className="mb-3 flex flex-wrap gap-2"
          >
            <input
              type="text"
              placeholder="Portal Name"
              value={newLinkName}
              onChange={e => setNewLinkName(e.target.value)}
              className="px-3 py-1.5 rounded-xl border text-xs font-bold bg-transparent"
            />
            <input
              type="text"
              placeholder="https://..."
              value={newLinkUrl}
              onChange={e => setNewLinkUrl(e.target.value)}
              className="flex-1 min-w-[200px] px-3 py-1.5 rounded-xl border text-xs font-bold bg-transparent"
            />
            <button type="submit" className="px-4 py-1.5 rounded-xl bg-[#0D2B5B] text-amber-300 text-xs font-extrabold">
              Save
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {quickLinks.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`group p-3.5 rounded-2xl border transition flex items-center justify-between hover:border-amber-400 ${
                darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-[#F8FAFC] border-slate-200 hover:bg-white'
              }`}
            >
              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-blue-50 text-[#0D2B5B] border border-blue-200/70">
                  {link.tag}
                </span>
                <div className="font-extrabold text-xs mt-1.5 truncate group-hover:text-[#0D2B5B] dark:group-hover:text-amber-300">
                  {link.name}
                </div>
                <div className="text-[11px] opacity-60 truncate">{link.desc}</div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 text-amber-500 shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* 2. Hero Greeting & Inspirational Quote Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0D2B5B] via-[#153E82] to-[#0A2249] text-white shadow-md border-b-4 border-amber-400 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-amber-300">
            <span>
              {formattedClock} • Duty In: {dutyInTime}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <CloudSun className="w-3.5 h-3.5" /> {weatherInfo.temp} ({weatherInfo.city})
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            {timeGreeting}, {currentUser.name}!
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 italic">
            “{dailyQuote.text}” <span className="not-italic font-extrabold text-amber-300">— {dailyQuote.author}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => onNavigate('tasks')}
            className="px-4 py-2.5 rounded-2xl bg-amber-400 text-[#0D2B5B] font-black text-xs hover:bg-amber-300 transition"
          >
            Open My KPIs ({myPct}%)
          </button>
          <button
            onClick={() => onNavigate('reconciliations')}
            className="px-4 py-2.5 rounded-2xl bg-white/15 text-white border border-white/25 font-extrabold text-xs hover:bg-white/25 transition"
          >
            Bank Recs ({bankRecs.filter(r => r.userId === currentUser.id).length})
          </button>
        </div>
      </div>

      {/* 3. Morning Readiness & Cut-Off Strip (Dinithi -> Shani -> Daily Entries Chain) */}
      <div className={`p-4 rounded-3xl border ${cardSurface} flex flex-wrap items-center justify-between gap-3`}>
        <div className="flex items-center gap-2 text-xs font-black text-[#0D2B5B] dark:text-amber-300">
          <Clock className="w-4 h-4 text-amber-500" />
          <span>Morning Readiness Chain (08:30 AM – 10:30 AM Cut-Off):</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span
            className={`px-3 py-1 rounded-full border font-extrabold ${
              dinithiSlipsAcked
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-amber-50 text-amber-800 border-amber-200'
            }`}
          >
            1. Dinithi Slips: {dinithiSlipsAcked ? 'Approved ✓' : 'Awaiting Shani Ack'}
          </span>
          <ArrowRight className="w-3.5 h-3.5 opacity-40" />
          <span
            className={`px-3 py-1 rounded-full border font-extrabold ${
              shaniAllocDone
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}
          >
            2. Shani Allocation: {shaniAllocDone ? 'Completed ✓' : 'In Progress'}
          </span>
          <ArrowRight className="w-3.5 h-3.5 opacity-40" />
          <span className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 font-extrabold">
            3. Team Entries Acked: {entriesAckedCount} / {allocatedEntries.length}
          </span>
        </div>
      </div>

      {/* 4. Recognition & Efficiency Row (Our Pledge Leader + Most Efficient Employee Today + Hydration) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Department Top Performer (Our Pledge) */}
        <div className={`p-5 rounded-3xl border-2 border-amber-300 ${cardSurface} flex flex-col justify-between`}>
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-black uppercase">
              <Trophy className="w-3.5 h-3.5 text-amber-600" /> Department Top Performer
            </span>
            <span className="text-sm font-black text-amber-600">★ {topPledge.avg} / 5.0</span>
          </div>
          <div className="flex items-center gap-3.5 my-2">
            <div className="p-3 rounded-full bg-[#0D2B5B] text-amber-300 border-2 border-amber-400 font-black text-base flex items-center justify-center shrink-0">
              {topPledge.user.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .slice(0, 2)}
            </div>
            <div>
              <div className="font-black text-base">{topPledge.user.name}</div>
              <div className="text-xs opacity-70">{topPledge.user.roleTitle}</div>
              <span
                className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full border text-[10px] font-bold ${
                  BRAIN_COLOR_STYLES[topPledge.user.brainColor]?.badge
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${BRAIN_COLOR_STYLES[topPledge.user.brainColor]?.dot}`} />
                {topPledge.user.brainColor}
              </span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('pledge')}
            className="mt-3 w-full py-2.5 rounded-2xl bg-[#0D2B5B] text-amber-300 font-black text-xs hover:bg-blue-900 transition"
          >
            Rate a Colleague on FLI Pledge →
          </button>
        </div>

        {/* Most Efficient Employee Today Card with Progress Bar */}
        <div className={`p-5 rounded-3xl border ${cardSurface} flex flex-col justify-between`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-black uppercase">
                <Activity className="w-3.5 h-3.5" /> Most Efficient Today
              </span>
              <span className="text-sm font-black text-emerald-600">{topEfficient.pct}% Done</span>
            </div>
            <div className="font-black text-base">{topEfficient.user.name}</div>
            <div className="text-xs opacity-70 mb-3">{topEfficient.user.roleTitle}</div>
            <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                style={{ width: `${topEfficient.pct}%` }}
                className="h-full bg-gradient-to-r from-[#0D2B5B] via-blue-600 to-amber-400 rounded-full transition-all duration-500"
              />
            </div>
          </div>
          <div className="mt-3 text-[11px] opacity-70 flex items-center justify-between">
            <span>Your Daily Progress: {myPct}%</span>
            <button onClick={() => onNavigate('reports')} className="font-extrabold text-[#0D2B5B] dark:text-amber-300">
              View Reports →
            </button>
          </div>
        </div>

        {/* Wellness & Daily Water Intake Reminder Card */}
        <div className={`p-5 rounded-3xl border ${cardSurface} flex flex-col justify-between`}>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-black text-blue-700 dark:text-blue-300">
                <Droplets className="w-4 h-4" /> Daily Hydration &amp; Posture
              </span>
              <span className="text-[11px] font-extrabold opacity-70">Target: {targetMl} ml</span>
            </div>
            <p className="text-xs opacity-75">
              Based on your profile weight ({weightKg} kg), aim for <strong>{targetGlasses} glasses</strong> (250ml each) and take a 5-min posture break every 90 mins.
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm font-black text-[#0D2B5B] dark:text-amber-300">
              {waterGlasses} / {targetGlasses} Glasses
            </div>
            <button
              onClick={onAddWaterGlass}
              className="px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-extrabold hover:bg-blue-700 transition"
            >
              + Log 250ml Water
            </button>
          </div>
        </div>
      </div>

      {/* 5. Interactive Monthly Calendar (Everyone vs Staff) + Team Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className={`lg:col-span-7 p-5 rounded-3xl border ${cardSurface} space-y-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-black text-sm text-[#0D2B5B] dark:text-amber-300">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>
                {today.toLocaleString('default', { month: 'long' })} {year} — Department Calendar &amp; Scheduled Jobs
              </span>
            </div>
            <span className="text-xs font-bold opacity-70">Selected: {selectedCalDate}</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-extrabold opacity-60">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {Array.from({ length: firstDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const dayNum = idx + 1;
              const dateIso = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
              const hasEvents = calendarEvents.some(
                ev =>
                  ev.date === dateIso &&
                  ev.status === 'approved' &&
                  (ev.assignedToId === 'everyone' || ev.assignedToId === currentUser.id || currentUser.isAdmin)
              );
              const isSelected = selectedCalDate === dateIso;
              return (
                <button
                  key={dateIso}
                  onClick={() => setSelectedCalDate(dateIso)}
                  className={`py-2 rounded-xl font-bold transition relative ${
                    isSelected
                      ? 'bg-[#0D2B5B] text-amber-300 font-black'
                      : 'hover:bg-blue-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {dayNum}
                  {hasEvents && <span className="block w-1.5 h-1.5 rounded-full bg-amber-400 mx-auto mt-0.5" />}
                </button>
              );
            })}
          </div>

          {/* Add Reminder / Scheduled Job Form */}
          <form onSubmit={handleAddCalendarItem} className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex flex-wrap gap-2">
              <select
                value={calItemType}
                onChange={e => setCalItemType(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl border text-xs font-bold bg-transparent"
              >
                <option value="reminder" className="text-slate-900">Reminder</option>
                <option value="scheduled_job" className="text-slate-900">Scheduled Job</option>
              </select>
              <select
                value={calAssigneeId}
                onChange={e => setCalAssigneeId(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl border text-xs font-bold bg-transparent"
              >
                <option value="everyone" className="text-slate-900">Everyone (All Staff)</option>
                {users.map(u => (
                  <option key={u.id} value={u.id} className="text-slate-900">
                    {u.name.split(' ')[0]}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder={`Add event on ${selectedCalDate}...`}
                value={calTitle}
                onChange={e => setCalTitle(e.target.value)}
                className="flex-1 min-w-[160px] px-3 py-1.5 rounded-xl border text-xs font-bold bg-transparent"
              />
              <button type="submit" className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-[#0D2B5B] font-black text-xs">
                Add
              </button>
            </div>
          </form>

          {/* Events List for Selected Date */}
          <div className="max-h-32 overflow-y-auto space-y-1.5">
            {calendarEvents
              .filter(
                ev =>
                  ev.date === selectedCalDate &&
                  (ev.assignedToId === 'everyone' ||
                    ev.assignedToId === currentUser.id ||
                    ev.createdById === currentUser.id ||
                    currentUser.isAdmin)
              )
              .map(ev => (
                <div
                  key={ev.id}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-[11px] flex items-center justify-between"
                >
                  <div>
                    <span className="font-extrabold">{ev.title}</span>
                    <div className="opacity-65">
                      {ev.type === 'scheduled_job' ? 'Scheduled Job' : 'Reminder'} •{' '}
                      {ev.assignedToId === 'everyone'
                        ? 'Everyone (All Staff)'
                        : users.find(u => u.id === ev.assignedToId)?.name.split(' ')[0]}
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase ${
                      ev.status === 'approved' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-800'
                    }`}
                  >
                    {ev.status}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Team Strip with Brain Colors & 1-Click Direct Message */}
        <div className={`lg:col-span-5 p-5 rounded-3xl border ${cardSurface} space-y-3`}>
          <div className="flex items-center justify-between">
            <span className="font-black text-sm text-[#0D2B5B] dark:text-amber-300">
              Finance Department Team ({users.length})
            </span>
            <span className="text-[11px] opacity-65">Click to 1-on-1 Chat</span>
          </div>
          <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
            {users.map(u => (
              <div
                key={u.id}
                onClick={() => u.id !== currentUser.id && onOpenDirectChat(u.id)}
                className={`p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between transition ${
                  u.id !== currentUser.id ? 'cursor-pointer hover:border-amber-400' : ''
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-[#0D2B5B] text-amber-300 font-black text-xs flex items-center justify-center shrink-0">
                    {u.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold truncate">
                      {u.name} {u.onLeave && <span className="text-rose-500">(On Leave)</span>}
                    </div>
                    <div className="text-[10px] opacity-65 truncate">{u.roleTitle}</div>
                  </div>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full border text-[10px] font-bold shrink-0 ${
                    BRAIN_COLOR_STYLES[u.brainColor]?.badge
                  }`}
                >
                  {u.brainColor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 6. MY CONFIDENTIAL JD & KPI TASKS WORKSPACE
// ============================================================================

function MyTasksWorkspace({
  currentUser,
  users,
  tasks,
  darkMode,
  eyeCareMode,
  onAcceptTask,
  onHandoverTask,
  onCompleteTask,
  onToggleSubItem,
  onEscalateSubItem,
  onRequestJobDetailUpdate
}) {
  const [scheduleTab, setScheduleTab] = useState('Daily');
  const [handoverTargetByTask, setHandoverTargetByTask] = useState({});
  const [remarkByTask, setRemarkByTask] = useState({});
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editSlot, setEditSlot] = useState('');
  const [editNotes, setEditNotes] = useState('');

  const cardSurface = darkMode
    ? 'bg-[#0F1B33] border-slate-800'
    : eyeCareMode
    ? 'bg-white border-amber-200/70 shadow-sm'
    : 'bg-white border-slate-200 shadow-sm';
  const filteredTasks = tasks.filter(t => (scheduleTab === 'Daily' ? t.category === 'Daily' : t.category !== 'Daily'));

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border ${cardSurface} flex flex-wrap items-center justify-between gap-3`}>
        <div>
          <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">
            My Confidential JD &amp; Time-Allocated KPIs
          </h2>
          <p className="text-xs opacity-70">
            Visible strictly to {currentUser.name}. Accept tasks, mark complete, hand over to colleagues, or request JD updates under Superior approval.
          </p>
        </div>
        <div className="flex gap-2">
          {['Daily', 'Month End'].map(tab => (
            <button
              key={tab}
              onClick={() => setScheduleTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition ${
                scheduleTab === tab ? 'bg-[#0D2B5B] text-amber-300' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              {tab} Jobs ({tasks.filter(t => (tab === 'Daily' ? t.category === 'Daily' : t.category !== 'Daily')).length})
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredTasks.map(task => (
          <div key={task.id} className={`p-5 rounded-3xl border ${cardSurface} space-y-3`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0D2B5B] border border-blue-200/70 text-[10px] font-black">
                    {task.timeSlot} • {task.allocatedMinutes} Min
                  </span>
                  <FourStageBadge status={task.status} />
                </div>
                <h3 className="font-black text-sm">{task.title}</h3>
                {task.remark && <p className="text-xs text-blue-700 dark:text-amber-300">Note: {task.remark}</p>}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {!task.accepted && (task.status === 'pending' || task.status === 'rejected') && (
                  <button
                    onClick={() => onAcceptTask(task.id)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold"
                  >
                    Accept Job
                  </button>
                )}

                <button
                  onClick={() => {
                    setEditingTaskId(editingTaskId === task.id ? null : task.id);
                    setEditTitle(task.title);
                    setEditSlot(task.timeSlot);
                    setEditNotes(task.remark || '');
                  }}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold"
                >
                  Update Details
                </button>
              </div>
            </div>

            {/* Itemized Voucher / Entry Sub-Checklist */}
            {task.subItems && task.subItems.length > 0 && (
              <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 space-y-2">
                <div className="text-[11px] font-extrabold uppercase opacity-70">
                  Itemized Voucher / Entry Checklist (Mark Complete One-by-One or Escalate for Help)
                </div>
                {task.subItems.map(sub => (
                  <div
                    key={sub.id}
                    className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                  >
                    <label className="flex items-center gap-2 font-bold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sub.done}
                        onChange={() => onToggleSubItem(task.id, sub.id)}
                      />
                      <span className={sub.done ? 'line-through opacity-60' : ''}>{sub.label}</span>
                    </label>
                    {sub.escalated ? (
                      <span className="text-[10px] font-extrabold text-amber-600">Escalated to Superior</span>
                    ) : (
                      <button
                        onClick={() => onEscalateSubItem(task.id, sub.id, 'Need superior assistance on voucher batch')}
                        className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-[10px] font-extrabold hover:bg-rose-100"
                      >
                        Need Help → Superior
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Request Job Detail Update Form (Under Superior Approval) */}
            {editingTaskId === task.id && (
              <div className="p-3 rounded-2xl border border-amber-300 bg-amber-50/50 dark:bg-slate-900 space-y-2 text-xs">
                <div className="font-extrabold text-[#0D2B5B] dark:text-amber-300">
                  Request Job Detail Modification (Requires Next Superior Approval)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={e => setEditTitle(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border font-bold bg-white dark:bg-slate-800"
                  />
                  <input
                    type="text"
                    value={editSlot}
                    onChange={e => setEditSlot(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border font-bold bg-white dark:bg-slate-800"
                  />
                  <input
                    type="text"
                    placeholder="Reason / Notes"
                    value={editNotes}
                    onChange={e => setEditNotes(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border font-bold bg-white dark:bg-slate-800"
                  />
                </div>
                <button
                  onClick={() => {
                    onRequestJobDetailUpdate({
                      id: `jreq-${Date.now()}`,
                      taskId: task.id,
                      userId: currentUser.id,
                      supervisorId: currentUser.supervisorId || 'rangika',
                      newTitle: editTitle,
                      newTimeSlot: editSlot,
                      newNotes: editNotes,
                      status: 'pending'
                    });
                    setEditingTaskId(null);
                  }}
                  className="px-4 py-1.5 rounded-xl bg-[#0D2B5B] text-amber-300 font-extrabold"
                >
                  Submit Update for Approval
                </button>
              </div>
            )}

            {/* Complete or Hand Over Controls */}
            {(task.status === 'pending' || task.status === 'rejected') && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-1 min-w-[220px]">
                  <input
                    type="text"
                    placeholder="Completion remark..."
                    value={remarkByTask[task.id] || ''}
                    onChange={e => setRemarkByTask(prev => ({ ...prev, [task.id]: e.target.value }))}
                    className="flex-1 px-3 py-1.5 rounded-xl border text-xs font-bold bg-transparent"
                  />
                  <button
                    onClick={() => onCompleteTask(task.id, task.allocatedMinutes, remarkByTask[task.id] || 'Completed')}
                    className="px-4 py-1.5 rounded-xl bg-[#0D2B5B] text-amber-300 text-xs font-black hover:bg-blue-900"
                  >
                    Mark Complete
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <select
                    value={handoverTargetByTask[task.id] || ''}
                    onChange={e => setHandoverTargetByTask(prev => ({ ...prev, [task.id]: e.target.value }))}
                    className="px-2.5 py-1.5 rounded-xl border text-xs font-bold bg-transparent"
                  >
                    <option value="" className="text-slate-900">Hand over to...</option>
                    {users
                      .filter(u => u.id !== currentUser.id)
                      .map(u => (
                        <option key={u.id} value={u.id} className="text-slate-900">
                          {u.name}
                        </option>
                      ))}
                  </select>
                  <button
                    onClick={() => {
                      const target = handoverTargetByTask[task.id];
                      if (target) onHandoverTask(task.id, target);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 text-[#0D2B5B] text-xs font-black"
                  >
                    Hand Over
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// 7. MONTH-END CLOSING CHECKLIST & CUT-OFF TRACKER
// ============================================================================

function MonthEndClosingPortal({ currentUser, users, monthEndItems, bankRecs, darkMode, onUpdateProgress, onAddItem }) {
  const [newTitle, setNewTitle] = useState('');
  const [newOwnerId, setNewOwnerId] = useState('nikeshala');
  const [newTargetDate, setNewTargetDate] = useState('2026-11-30');
  const [newDependency, setNewDependency] = useState('Requires Bank Reconciliations');

  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';
  const recPct = Math.round((bankRecs.filter(r => r.status === 'completed').length / bankRecs.length) * 100);
  const overallAvg = Math.round(monthEndItems.reduce((acc, m) => acc + m.progress, 0) / monthEndItems.length);

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border ${cardSurface} flex flex-wrap items-center justify-between gap-4`}>
        <div>
          <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">
            Month-End Closing Checklist &amp; Cut-Off Tracker
          </h2>
          <p className="text-xs opacity-70">
            Track target dates, owners, dependencies (e.g., Bank Reconciliations before Cash Flow &amp; P&amp;L), and closing readiness.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="px-3.5 py-2 rounded-2xl bg-blue-50 dark:bg-slate-800 font-extrabold text-[#0D2B5B] dark:text-amber-300">
            81 Bank Recs: {recPct}%
          </div>
          <div className="px-3.5 py-2 rounded-2xl bg-emerald-50 dark:bg-slate-800 font-extrabold text-emerald-700 dark:text-emerald-400">
            Overall Month-End: {overallAvg}%
          </div>
        </div>
      </div>

      {/* Add Month-End Milestone (Supervisors / HOD) */}
      {(currentUser.isAdmin || ['mahasen', 'kanishka', 'hansi', 'nayomi'].includes(currentUser.id)) && (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!newTitle.trim()) return;
            onAddItem({
              id: `me-${Date.now()}`,
              title: newTitle.trim(),
              ownerId: newOwnerId,
              targetDate: newTargetDate,
              dependency: newDependency,
              progress: 0,
              status: 'pending'
            });
            setNewTitle('');
          }}
          className={`p-4 rounded-3xl border ${cardSurface} grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs`}
        >
          <input
            placeholder="Month-End Closing Deliverable..."
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            className="sm:col-span-2 px-3 py-2 rounded-xl border font-bold bg-transparent"
          />
          <select
            value={newOwnerId}
            onChange={e => setNewOwnerId(e.target.value)}
            className="px-3 py-2 rounded-xl border font-bold bg-transparent"
          >
            {users.map(u => (
              <option key={u.id} value={u.id} className="text-slate-900">
                Owner: {u.name.split(' ')[0]}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={newTargetDate}
            onChange={e => setNewTargetDate(e.target.value)}
            className="px-3 py-2 rounded-xl border font-bold bg-transparent"
          />
          <button type="submit" className="px-4 py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-black">
            + Add Milestone
          </button>
        </form>
      )}

      <div className="space-y-3">
        {monthEndItems.map(item => {
          const owner = users.find(u => u.id === item.ownerId);
          return (
            <div key={item.id} className={`p-5 rounded-3xl border ${cardSurface} space-y-3`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="font-black text-sm">{item.title}</div>
                  <div className="text-xs opacity-70 mt-0.5">
                    Owner: <strong>{owner?.name}</strong> • Target Cut-Off: <strong>{item.targetDate}</strong> •{' '}
                    <span className="text-amber-700 dark:text-amber-300 font-semibold">{item.dependency}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-[#0D2B5B] dark:text-amber-300">{item.progress}%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={item.progress}
                    onChange={e => onUpdateProgress(item.id, Number(e.target.value))}
                    className="accent-[#0D2B5B]"
                  />
                </div>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  style={{ width: `${item.progress}%` }}
                  className="h-full bg-gradient-to-r from-[#0D2B5B] to-amber-400 rounded-full transition-all"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// 8. BANK RECONCILIATIONS PORTAL (81 Accounts + Variance Tags + Remarks)
// ============================================================================

function BankReconciliationPortal({
  currentUser,
  users,
  bankRecs,
  darkMode,
  eyeCareMode,
  onToggleRec,
  onUpdateRemark,
  onUpdateTag,
  onReassignRec
}) {
  const [filterStaff, setFilterStaff] = useState(currentUser.isAdmin ? 'all' : currentUser.id);
  const [filterTag, setFilterTag] = useState('all');
  const cardSurface = darkMode
    ? 'bg-[#0F1B33] border-slate-800'
    : eyeCareMode
    ? 'bg-white border-amber-200/70 shadow-sm'
    : 'bg-white border-slate-200 shadow-sm';

  const visibleRecs = bankRecs.filter(r => {
    if (filterStaff !== 'all' && r.userId !== filterStaff) return false;
    if (filterTag !== 'all' && r.tag !== filterTag) return false;
    return true;
  });
  const doneCount = visibleRecs.filter(r => r.status === 'completed').length;

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border ${cardSurface} flex flex-wrap items-center justify-between gap-3`}>
        <div>
          <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">
            Bank Reconciliations ({doneCount} / {visibleRecs.length} Completed)
          </h2>
          <p className="text-xs opacity-70">
            Mark accounts complete, tag variance status ({REC_VARIANCE_TAGS.join(', ')}), and record remarks anytime.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={filterTag}
            onChange={e => setFilterTag(e.target.value)}
            className="px-3 py-2 rounded-xl border text-xs font-extrabold bg-transparent"
          >
            <option value="all" className="text-slate-900">All Variance Tags</option>
            {REC_VARIANCE_TAGS.map(t => (
              <option key={t} value={t} className="text-slate-900">{t}</option>
            ))}
          </select>
          <select
            value={filterStaff}
            onChange={e => setFilterStaff(e.target.value)}
            className="px-3 py-2 rounded-xl border text-xs font-extrabold bg-transparent"
          >
            <option value="all" className="text-slate-900">All 81 Accounts</option>
            {users.map(u => (
              <option key={u.id} value={u.id} className="text-slate-900">
                {u.name} ({bankRecs.filter(r => r.userId === u.id).length})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleRecs.map(rec => {
          const owner = users.find(u => u.id === rec.userId);
          const isDone = rec.status === 'completed';
          return (
            <div
              key={rec.id}
              className={`p-4 rounded-2xl border ${
                isDone ? 'border-emerald-300 bg-emerald-50/30 dark:bg-emerald-950/10' : cardSurface
              } space-y-2.5`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-black text-xs text-[#0D2B5B] dark:text-amber-300">{rec.account}</div>
                  <div className="text-[11px] opacity-70">Assigned: {owner?.name}</div>
                </div>
                <button
                  onClick={() => onToggleRec(rec.id)}
                  className={`px-3 py-1 rounded-xl text-[11px] font-black transition ${
                    isDone ? 'bg-emerald-600 text-white' : 'bg-amber-400 text-[#0D2B5B]'
                  }`}
                >
                  {isDone ? 'Completed ✓' : 'Mark Complete'}
                </button>
              </div>

              {/* Quick Variance / Unreconciled Tag Selector */}
              <div className="flex flex-wrap gap-1">
                {REC_VARIANCE_TAGS.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => onUpdateTag(rec.id, tag)}
                    className={`px-2 py-0.5 rounded-lg text-[10px] font-extrabold border transition ${
                      rec.tag === tag
                        ? 'bg-[#0D2B5B] text-amber-300 border-[#0D2B5B]'
                        : 'border-slate-200 dark:border-slate-700 opacity-65 hover:opacity-100'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Status remark / pending reason..."
                value={rec.remark}
                onChange={e => onUpdateRemark(rec.id, e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl border text-xs font-medium bg-transparent"
              />

              {currentUser.isAdmin && (
                <select
                  value={rec.userId}
                  onChange={e => onReassignRec(rec.id, e.target.value)}
                  className="w-full px-2.5 py-1 rounded-xl border text-[11px] font-bold bg-transparent"
                >
                  {users.map(u => (
                    <option key={u.id} value={u.id} className="text-slate-900">
                      Reassign to: {u.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// 9. DAILY ENTRIES ALLOCATION PORTAL (Search, Smart Suggest, 1-Click Assign Filtered)
// ============================================================================

function DailyEntriesAllocationPortal({
  currentUser,
  users,
  darkMode,
  eyeCareMode,
  allocatedEntries,
  onPublishAllocations,
  onAcknowledgeOne,
  onAcknowledgeAll,
  onCompleteEntries,
  onSetPendingReason,
  onEscalateEntries
}) {
  const todayStr = '2026-11-23';
  const [selectedBank, setSelectedBank] = useState('Sampath Bank - 09810004042 (HO Main)');
  const [statementFile, setStatementFile] = useState('09810004042.xlsx');
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Instant Search, Amount Range & Side Filters
  const [rowFilter, setRowFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');

  const [bulkAssigneeId, setBulkAssigneeId] = useState('dinithi');
  const [lastCheckedIdx, setLastCheckedIdx] = useState(null);
  const [mySelectedIds, setMySelectedIds] = useState([]);

  const [statementRows, setStatementRows] = useState([
    {
      id: 'sr-1',
      date: todayStr,
      ref: 'SMP-0981-01',
      side: 'Debit',
      amount: 145000,
      balance: 2845000,
      desc: 'CEFTS TRF / LOAN DISB VOUCHER 4412 - K. PERERA',
      selected: false,
      assigneeId: 'dinithi',
      highlighted: true,
      specialNote: 'Slip attached by Dinithi'
    },
    {
      id: 'sr-2',
      date: todayStr,
      ref: 'SMP-0981-02',
      side: 'Debit',
      amount: 68500,
      balance: 2776500,
      desc: 'SLIPS PYMT / METROPOLITAN OFFICE SUPPLIES INV-892',
      selected: false,
      assigneeId: 'charuka',
      highlighted: false,
      specialNote: ''
    },
    {
      id: 'sr-3',
      date: todayStr,
      ref: 'SMP-0981-03',
      side: 'Debit',
      amount: 32000,
      balance: 2744500,
      desc: 'IBFT DR / REF 8891 UNIDENTIFIED BRANCH TRF',
      selected: false,
      assigneeId: '',
      highlighted: true,
      specialNote: 'Verify branch before assigning'
    },
    {
      id: 'sr-4',
      date: todayStr,
      ref: 'SEY-5002-01',
      side: 'Debit',
      amount: 95000,
      balance: 4120000,
      desc: 'RTGS / CORPORATE FD INTEREST & WHT REMITTANCE',
      selected: false,
      assigneeId: 'shani',
      highlighted: false,
      specialNote: 'Shani WHT schedule'
    },
    {
      id: 'sr-5',
      date: todayStr,
      ref: 'SEY-5002-02',
      side: 'Credit',
      amount: 420000,
      balance: 4540000,
      desc: 'CASH DEP / KURUNEGALA BRANCH COLLECTION 0098',
      selected: false,
      assigneeId: 'gayodya',
      highlighted: false,
      specialNote: ''
    }
  ]);

  const cardSurface = darkMode
    ? 'bg-[#0F1B33] border-slate-800'
    : eyeCareMode
    ? 'bg-white border-amber-200/70 shadow-sm'
    : 'bg-white border-slate-200 shadow-sm';
  const canAllocate = currentUser.id === 'shani' || currentUser.isAdmin;
  const rowPadding = eyeCareMode ? 'py-3.5 px-2.5' : 'p-2.5';

  // Real Binary Excel (.xlsx) & CSV Parser via SheetJS
  const handleStatementFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatementFile(file.name);
    if (file.name.includes('013012776905002')) {
      setSelectedBank('Seylan Bank - 013012776905002 (HO2)');
    } else if (file.name.includes('09810004042')) {
      setSelectedBank('Sampath Bank - 09810004042 (HO Main)');
    }
    try {
      const XLSX = await import('https://cdn.sheetjs.com/xlsx-0.20.2/package/xlsx.mjs');
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rawMatrix = XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: '' });

      const headerRowIdx = rawMatrix.findIndex(
        row =>
          Array.isArray(row) &&
          row.some(cell => /date|txn|value/i.test(String(cell))) &&
          row.some(cell => /desc|narr|partic|detail|debit|credit|withdraw|deposit|amount/i.test(String(cell)))
      );

      let jsonRows = [];
      if (headerRowIdx >= 0) {
        const headers = rawMatrix[headerRowIdx].map((h, i) => String(h || `Col_${i}`).trim());
        jsonRows = rawMatrix.slice(headerRowIdx + 1).map(r => {
          const obj = {};
          headers.forEach((h, i) => {
            obj[h] = r[i] ?? '';
          });
          return obj;
        });
      } else {
        jsonRows = XLSX.utils.sheet_to_json(firstSheet, { defval: '' });
      }

      if (jsonRows.length > 0) {
        const parsed = jsonRows
          .map((row, idx) => {
            const keys = Object.keys(row);
            const dateKey = keys.find(k => /date|value/i.test(k)) || keys[0];
            const refKey = keys.find(k => /ref|cheque|chq|doc|no/i.test(k));
            const descKey = keys.find(k => /desc|narr|partic|detail|remark|memo/i.test(k)) || keys[1] || keys[0];
            const debitKey = keys.find(k => /debit|dr|withd|payment/i.test(k));
            const creditKey = keys.find(k => /credit|cr|depos|receipt/i.test(k));
            const balKey = keys.find(k => /bal|running/i.test(k));
            const amtKey = keys.find(k => /amount|amt|value/i.test(k));

            const rawDebit = debitKey ? Number(String(row[debitKey]).replace(/[^0-9.-]/g, '')) : 0;
            const rawCredit = creditKey ? Number(String(row[creditKey]).replace(/[^0-9.-]/g, '')) : 0;
            const rawAmt = amtKey ? Number(String(row[amtKey]).replace(/[^0-9.-]/g, '')) : 0;
            const rawBal = balKey ? Number(String(row[balKey]).replace(/[^0-9.-]/g, '')) : null;

            const descText = String(row[descKey] || '').replace(/[^\x20-\x7E]/g, ' ').trim();
            if (/opening balance|closing balance|total|brought forward|carried forward/i.test(descText)) return null;

            const side = rawCredit > 0 && rawDebit <= 0 ? 'Credit' : 'Debit';
            const amount = Math.abs(rawDebit || rawCredit || rawAmt);
            if (!descText && amount === 0) return null;

            return {
              id: `sr-xlsx-${Date.now()}-${idx}`,
              date: String(row[dateKey] || todayStr).slice(0, 15),
              ref: refKey && row[refKey] ? String(row[refKey]).trim() : `TXN-${100 + idx}`,
              side,
              amount: amount || 0,
              balance: rawBal !== null && !Number.isNaN(rawBal) ? rawBal : null,
              desc: descText || `Bank Transaction #${idx + 1}`,
              selected: false,
              assigneeId: '',
              highlighted: false,
              specialNote: ''
            };
          })
          .filter(Boolean);

        if (parsed.length > 0) {
          setStatementRows(parsed);
        }
      }
    } catch {
      // Fallback handled silently
    }
  };

  const visibleRows = statementRows.filter(r => {
    if (rowFilter === 'debit' && r.side !== 'Debit') return false;
    if (rowFilter === 'credit' && r.side !== 'Credit') return false;
    if (rowFilter === 'unallocated' && r.assigneeId) return false;
    if (rowFilter === 'highlighted' && !r.highlighted) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const match =
        r.desc.toLowerCase().includes(q) ||
        r.ref.toLowerCase().includes(q) ||
        (r.specialNote || '').toLowerCase().includes(q);
      if (!match) return false;
    }
    if (minAmount !== '' && r.amount < Number(minAmount)) return false;
    if (maxAmount !== '' && r.amount > Number(maxAmount)) return false;
    return true;
  });

  const handleRowCheck = (visibleIdx, isShift) => {
    const targetId = visibleRows[visibleIdx].id;
    if (isShift && lastCheckedIdx !== null) {
      const start = Math.min(lastCheckedIdx, visibleIdx);
      const end = Math.max(lastCheckedIdx, visibleIdx);
      const rangeIds = new Set(visibleRows.slice(start, end + 1).map(r => r.id));
      setStatementRows(prev => prev.map(r => (rangeIds.has(r.id) ? { ...r, selected: true } : r)));
    } else {
      setStatementRows(prev => prev.map(r => (r.id === targetId ? { ...r, selected: !r.selected } : r)));
      setLastCheckedIdx(visibleIdx);
    }
  };

  const handleBulkAssignSelected = () => {
    setStatementRows(prev =>
      prev.map(r => (r.selected ? { ...r, assigneeId: bulkAssigneeId, selected: false } : r))
    );
  };

  const handleAssignAllFiltered = () => {
    const visibleIds = new Set(visibleRows.map(r => r.id));
    setStatementRows(prev =>
      prev.map(r => (visibleIds.has(r.id) ? { ...r, assigneeId: bulkAssigneeId, selected: false } : r))
    );
  };

  const unallocatedDebits = statementRows.filter(r => r.side === 'Debit' && !r.assigneeId);
  const myEntries = allocatedEntries.filter(e => e.assigneeId === currentUser.id);

  return (
    <div className="space-y-5">
      {/* Unallocated Debit Alert Banner for Superiors */}
      {unallocatedDebits.length > 0 && (
        <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 text-rose-800 dark:text-rose-200 text-xs font-bold flex items-center justify-between">
          <span>
            Attention: {unallocatedDebits.length} Debit transaction(s) are currently NOT ALLOCATED and remain visible to Superiors until assigned.
          </span>
        </div>
      )}

      {/* Shani / HOD Statement Upload & Allocation Console */}
      {canAllocate && (
        <div className={`p-5 rounded-3xl border ${cardSurface} space-y-4`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">
                Statement Transaction Allocation (Sampath 09810004042 &amp; Seylan 013012776905002)
              </h2>
              <p className="text-xs opacity-70">
                Search by Ref/Cheque/Narration/Amount, use Smart Rule Suggestions, or assign One-by-One / Bulk (`Shift+Click` or `Assign Filtered`).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedBank}
                onChange={e => setSelectedBank(e.target.value)}
                className="px-3 py-2 rounded-xl border text-xs font-extrabold bg-transparent"
              >
                <option value="Sampath Bank - 09810004042 (HO Main)" className="text-slate-900">
                  Sampath Bank - 09810004042 (HO Main)
                </option>
                <option value="Seylan Bank - 013012776905002 (HO2)" className="text-slate-900">
                  Seylan Bank - 013012776905002 (HO2)
                </option>
              </select>

              <label className="px-4 py-2 rounded-xl bg-amber-400 text-[#0D2B5B] font-black text-xs cursor-pointer hover:bg-amber-300 transition flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5" />
                <span>Attach Statement</span>
                <input type="file" accept=".xlsx,.xls,.csv" onChange={handleStatementFileUpload} className="hidden" />
              </label>

              <button
                onClick={() => setShowFullPreview(true)}
                className="px-4 py-2 rounded-xl bg-[#0D2B5B] text-white font-extrabold text-xs hover:bg-blue-900 transition"
              >
                Full Preview ({statementFile})
              </button>
            </div>
          </div>

          {/* Search, Amount Range & Quick Filter Bar */}
          <div className="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 text-xs">
              <div className="sm:col-span-5 relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 opacity-50" />
                <input
                  type="text"
                  placeholder="Search Ref, Cheque No, or Narration keyword..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl border font-bold bg-white dark:bg-slate-800"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="number"
                  placeholder="Min Rs."
                  value={minAmount}
                  onChange={e => setMinAmount(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl border font-bold bg-white dark:bg-slate-800"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="number"
                  placeholder="Max Rs."
                  value={maxAmount}
                  onChange={e => setMaxAmount(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl border font-bold bg-white dark:bg-slate-800"
                />
              </div>
              <div className="sm:col-span-3 flex gap-1 overflow-x-auto">
                {['all', 'debit', 'credit', 'unallocated', 'highlighted'].map(f => (
                  <button
                    key={f}
                    onClick={() => setRowFilter(f)}
                    className={`px-2 py-1.5 rounded-xl font-extrabold capitalize text-[11px] ${
                      rowFilter === f ? 'bg-[#0D2B5B] text-amber-300' : 'bg-white dark:bg-slate-800 border'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Bulk & 1-Click Assign Filtered Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-200/70 dark:border-slate-800">
              <span className="text-[11px] font-bold opacity-70">
                Showing {visibleRows.length} row(s) • Tip: Hold Shift+Click for range selection
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={bulkAssigneeId}
                  onChange={e => setBulkAssigneeId(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border text-xs font-extrabold bg-white dark:bg-slate-800"
                >
                  {users.map(u => (
                    <option key={u.id} value={u.id} className="text-slate-900">
                      {u.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleBulkAssignSelected}
                  className="px-3.5 py-1.5 rounded-xl bg-[#0D2B5B] text-amber-300 font-black text-xs"
                >
                  Assign Selected
                </button>
                <button
                  onClick={handleAssignAllFiltered}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-[#0D2B5B] font-black text-xs"
                >
                  1-Click Assign Filtered ({visibleRows.length})
                </button>
              </div>
            </div>
          </div>

          {/* Editable Statement Table with Smart Rule Suggestions */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 text-[10px] font-extrabold uppercase opacity-75">
                <tr>
                  <th className={rowPadding}>Sel</th>
                  <th className={rowPadding}>Date</th>
                  <th className={rowPadding}>Ref / Chq</th>
                  <th className={rowPadding}>Statement Transaction Description &amp; Note</th>
                  <th className={`${rowPadding} text-right`}>Debit (Rs.)</th>
                  <th className={`${rowPadding} text-right`}>Credit (Rs.)</th>
                  <th className={rowPadding}>Assigned Staff &amp; Smart Suggestion</th>
                  <th className={`${rowPadding} text-center`}>Highlight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800">
                {visibleRows.map((row, idx) => {
                  const suggestion = suggestAssigneeForDescription(row.desc);
                  const suggestedUser = suggestion ? users.find(u => u.id === suggestion.userId) : null;
                  return (
                    <tr key={row.id} className={row.highlighted ? 'bg-amber-50/60 dark:bg-amber-950/20' : ''}>
                      <td className={rowPadding}>
                        <input
                          type="checkbox"
                          checked={row.selected}
                          onChange={(e) => handleRowCheck(idx, e.nativeEvent?.shiftKey)}
                        />
                      </td>
                      <td className={`${rowPadding} font-mono text-[11px] whitespace-nowrap`}>{row.date}</td>
                      <td className={`${rowPadding} font-mono text-[11px] whitespace-nowrap opacity-75`}>{row.ref}</td>
                      <td className={`${rowPadding} space-y-1 min-w-[260px]`}>
                        <input
                          type="text"
                          value={row.desc}
                          onChange={e =>
                            setStatementRows(prev => prev.map(x => (x.id === row.id ? { ...x, desc: e.target.value } : x)))
                          }
                          className="w-full font-bold bg-transparent border-b border-transparent focus:border-blue-400 focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="+ Add special note..."
                          value={row.specialNote}
                          onChange={e =>
                            setStatementRows(prev => prev.map(x => (x.id === row.id ? { ...x, specialNote: e.target.value } : x)))
                          }
                          className="w-full text-[11px] text-amber-700 dark:text-amber-300 bg-transparent focus:outline-none"
                        />
                      </td>
                      <td className={`${rowPadding} text-right font-extrabold text-rose-600 whitespace-nowrap`}>
                        {row.side === 'Debit' ? row.amount.toLocaleString() : '-'}
                      </td>
                      <td className={`${rowPadding} text-right font-extrabold text-emerald-600 whitespace-nowrap`}>
                        {row.side === 'Credit' ? row.amount.toLocaleString() : '-'}
                      </td>
                      <td className={`${rowPadding} space-y-1`}>
                        <select
                          value={row.assigneeId}
                          onChange={e =>
                            setStatementRows(prev => prev.map(x => (x.id === row.id ? { ...x, assigneeId: e.target.value } : x)))
                          }
                          className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold ${
                            !row.assigneeId ? 'border-rose-300 bg-rose-50 text-rose-700' : 'bg-transparent'
                          }`}
                        >
                          <option value="" className="text-slate-900">-- Not Allocated --</option>
                          {users.map(u => (
                            <option key={u.id} value={u.id} className="text-slate-900">{u.name}</option>
                          ))}
                        </select>
                        {!row.assigneeId && suggestedUser && (
                          <button
                            type="button"
                            onClick={() =>
                              setStatementRows(prev =>
                                prev.map(x => (x.id === row.id ? { ...x, assigneeId: suggestedUser.id } : x))
                              )
                            }
                            className="block text-[10px] font-extrabold text-blue-700 dark:text-amber-300 hover:underline"
                          >
                            ✨ Suggest: {suggestedUser.name.split(' ')[0]} ({suggestion.reason})
                          </button>
                        )}
                      </td>
                      <td className={`${rowPadding} text-center`}>
                        <button
                          type="button"
                          onClick={() =>
                            setStatementRows(prev => prev.map(x => (x.id === row.id ? { ...x, highlighted: !x.highlighted } : x)))
                          }
                          className={`p-1.5 rounded-xl ${
                            row.highlighted ? 'bg-amber-400 text-[#0D2B5B]' : 'bg-slate-100 dark:bg-slate-800 opacity-50'
                          }`}
                        >
                          <Star className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() =>
                onPublishAllocations(
                  statementRows
                    .filter(r => r.assigneeId)
                    .map(r => ({
                      ...r,
                      bank: selectedBank,
                      acknowledged: false,
                      ackAt: null,
                      status: 'assigned',
                      pendingReason: '',
                      escalatedToId: null,
                      escalatedMinutesAgo: 0,
                      supervisorNote: ''
                    }))
                )
              }
              className="px-5 py-2.5 rounded-2xl bg-[#0D2B5B] text-amber-300 font-black text-xs hover:bg-blue-900 transition"
            >
              Publish &amp; Hand Over Allocated Entries ({statementRows.filter(r => r.assigneeId).length})
            </button>
          </div>
        </div>
      )}

      {/* Assignee View: My Allocated Statement Transactions (4-Stage Badges + Rework Loop) */}
      <div className={`p-5 rounded-3xl border ${cardSurface} space-y-4`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-black text-[#0D2B5B] dark:text-amber-300">
              My Allocated Statement Transactions ({myEntries.length})
            </h3>
            <p className="text-xs opacity-70">
              Acknowledge physical documents (Bulk or One-by-One) to start your timer, pass entries, or transfer to your Superior for help.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={onAcknowledgeAll}
              className="px-3.5 py-2 rounded-xl bg-amber-400 text-[#0D2B5B] font-black text-xs"
            >
              Acknowledge All Unacknowledged
            </button>
            <button
              onClick={() => onCompleteEntries(mySelectedIds.length > 0 ? mySelectedIds : myEntries.map(e => e.id))}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-black text-xs"
            >
              Bulk Mark Complete ({mySelectedIds.length > 0 ? mySelectedIds.length : 'All'})
            </button>
            {mySelectedIds.length > 0 && (
              <button
                onClick={() => onEscalateEntries(mySelectedIds, 'Bulk help transfer to Superior')}
                className="px-3.5 py-2 rounded-xl bg-rose-600 text-white font-black text-xs"
              >
                Transfer Selected to Superior ({mySelectedIds.length})
              </button>
            )}
          </div>
        </div>

        <div className="space-y-2.5">
          {myEntries.map(entry => {
            const isChecked = mySelectedIds.includes(entry.id);
            return (
              <div
                key={entry.id}
                className={`p-4 rounded-2xl border ${
                  entry.status === 'rejected'
                    ? 'border-rose-300 bg-rose-50/40 dark:bg-rose-950/15'
                    : entry.highlighted
                    ? 'border-amber-300 bg-amber-50/40 dark:bg-amber-950/10'
                    : 'border-slate-200 dark:border-slate-800'
                } flex flex-wrap items-center justify-between gap-3`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      setMySelectedIds(prev =>
                        prev.includes(entry.id) ? prev.filter(x => x !== entry.id) : [...prev, entry.id]
                      )
                    }
                    className="mt-1"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span
                        className={`px-2 py-0.5 rounded-md font-black ${
                          entry.side === 'Debit' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {entry.side} • Rs. {entry.amount.toLocaleString()}
                      </span>
                      <FourStageBadge status={entry.status} />
                      <span className="font-bold opacity-70">{entry.bank}</span>
                      {entry.acknowledged && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#0D2B5B] text-[10px] font-extrabold">
                          Ack: {entry.ackAt}
                        </span>
                      )}
                      {entry.escalatedToId && (
                        <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black">
                          SLA Aging: {entry.escalatedMinutesAgo || 15}m escalated
                        </span>
                      )}
                    </div>
                    <div className="font-black text-sm mt-1">{entry.desc}</div>
                    {entry.specialNote && <div className="text-xs text-amber-700 font-bold">Note: {entry.specialNote}</div>}
                    {entry.supervisorNote && (
                      <div className="text-xs text-rose-600 font-extrabold mt-0.5">
                        Supervisor Send-Back Reason: {entry.supervisorNote}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {!entry.acknowledged && (
                    <button
                      onClick={() => onAcknowledgeOne(entry.id)}
                      className="px-3 py-1.5 rounded-xl bg-amber-400 text-[#0D2B5B] text-xs font-black"
                    >
                      Acknowledge
                    </button>
                  )}
                  {entry.status !== 'completed' && entry.status !== 'approved' ? (
                    <>
                      <input
                        type="text"
                        placeholder="If pending, add reason..."
                        value={entry.pendingReason}
                        onChange={e => onSetPendingReason(entry.id, e.target.value)}
                        className="px-2.5 py-1.5 rounded-xl border text-xs font-bold bg-transparent"
                      />
                      <button
                        onClick={() => onCompleteEntries([entry.id])}
                        className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-black"
                      >
                        Complete
                      </button>
                      <button
                        onClick={() => onEscalateEntries([entry.id], entry.pendingReason || 'Need superior help')}
                        className="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-extrabold"
                      >
                        Help → Superior
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Statement Preview Modal */}
      {showFullPreview && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0F1B33] border border-slate-200 dark:border-slate-700 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">
                  Full Statement Preview — {selectedBank}
                </h3>
                <p className="text-xs opacity-70">File: {statementFile} • Exact Statement Ledger Columns</p>
              </div>
              <button
                onClick={() => setShowFullPreview(false)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0D2B5B] text-amber-300">
                  <th className="p-2.5">Date</th>
                  <th className="p-2.5">Ref / Chq</th>
                  <th className="p-2.5">Description</th>
                  <th className="p-2.5 text-right">Debit (Rs.)</th>
                  <th className="p-2.5 text-right">Credit (Rs.)</th>
                  <th className="p-2.5 text-right">Balance (Rs.)</th>
                  <th className="p-2.5">Allocated To</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {statementRows.map(r => (
                  <tr key={r.id}>
                    <td className="p-2.5 whitespace-nowrap">{r.date}</td>
                    <td className="p-2.5 whitespace-nowrap">{r.ref}</td>
                    <td className="p-2.5">{r.desc}</td>
                    <td className="p-2.5 text-right font-extrabold text-rose-600">
                      {r.side === 'Debit' ? r.amount.toLocaleString() : '-'}
                    </td>
                    <td className="p-2.5 text-right font-extrabold text-emerald-600">
                      {r.side === 'Credit' ? r.amount.toLocaleString() : '-'}
                    </td>
                    <td className="p-2.5 text-right font-mono">
                      {typeof r.balance === 'number' ? r.balance.toLocaleString() : '-'}
                    </td>
                    <td className="p-2.5 font-bold">{users.find(u => u.id === r.assigneeId)?.name || 'Not Allocated'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 10. TEAM TREE VIEW, APPROVALS (WITH SEND-BACK REASON & SLA AGING) & LEAVE
// ============================================================================

function TeamTreeApprovalView({
  currentUser,
  users,
  subordinateIds,
  tasks,
  bankRecs,
  allocatedEntries,
  profileRequests,
  jobUpdateRequests,
  darkMode,
  onApproveTask,
  onRejectTask,
  onApproveEntry,
  onSendBackEntry,
  onApproveProfileReq,
  onApproveJobDetailReq,
  onToggleLeaveCoverage
}) {
  const [selectedStaffId, setSelectedStaffId] = useState(subordinateIds[0] || currentUser.id);
  const [coverIdByStaff, setCoverIdByStaff] = useState({});
  const [rejectReasonById, setRejectReasonById] = useState({});
  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';
  const canManageLeave = ['rangika', 'mahasen', 'kanishka'].includes(currentUser.id);

  const visibleStaff = users.filter(u => u.id === currentUser.id || subordinateIds.includes(u.id));
  const pendingTaskApprovals = tasks.filter(
    t => subordinateIds.includes(t.userId) && t.status === 'completed_pending_approval'
  );
  const pendingEntryApprovals = allocatedEntries.filter(
    e => subordinateIds.includes(e.assigneeId) && (e.status === 'completed' || e.escalatedToId === currentUser.id)
  );
  const myProfileReqs = profileRequests.filter(r => r.supervisorId === currentUser.id && r.status === 'pending');
  const myJobReqs = jobUpdateRequests.filter(r => r.supervisorId === currentUser.id && r.status === 'pending');

  const totalQueue =
    pendingTaskApprovals.length + pendingEntryApprovals.length + myProfileReqs.length + myJobReqs.length;

  return (
    <div className="space-y-5">
      {/* Pending Supervisor Approvals & SLA Escalation Queue */}
      <div className={`p-5 rounded-3xl border ${cardSurface} space-y-3`}>
        <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">
          Supervisor Approval &amp; Escalation Queue ({totalQueue})
        </h2>

        {totalQueue === 0 && (
          <p className="text-xs opacity-70">No pending approvals or escalated entries waiting in your queue right now.</p>
        )}

        {pendingTaskApprovals.map(t => {
          const emp = users.find(u => u.id === t.userId);
          return (
            <div
              key={t.id}
              className="p-3.5 rounded-2xl border border-amber-200 bg-amber-50/40 dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <div>
                <div className="font-black">
                  {emp?.name} — {t.title}
                </div>
                <div className="opacity-70">
                  Allocated: {t.allocatedMinutes}m • Actual: {t.actualMinutes}m • {t.remark}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  placeholder="Rework / Send-back reason..."
                  value={rejectReasonById[t.id] || ''}
                  onChange={e => setRejectReasonById(prev => ({ ...prev, [t.id]: e.target.value }))}
                  className="px-2.5 py-1.5 rounded-xl border text-xs font-bold bg-white dark:bg-slate-800"
                />
                <button
                  onClick={() => onApproveTask(t.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-black"
                >
                  Approve
                </button>
                <button
                  onClick={() => onRejectTask(t.id, rejectReasonById[t.id] || 'Please verify figures and re-submit')}
                  className="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-black"
                >
                  Send Back
                </button>
              </div>
            </div>
          );
        })}

        {/* Escalated or Completed Bank Entries Queue with SLA Aging Indicator */}
        {pendingEntryApprovals.map(e => {
          const emp = users.find(u => u.id === e.assigneeId);
          return (
            <div
              key={e.id}
              className="p-3.5 rounded-2xl border border-rose-200 bg-rose-50/35 dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black">{emp?.name} — {e.desc}</span>
                  {e.escalatedToId && (
                    <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-black">
                      Escalated SLA: {e.escalatedMinutesAgo || 45} mins overdue
                    </span>
                  )}
                </div>
                <div className="opacity-70 mt-0.5">
                  {e.bank} • Rs. {e.amount.toLocaleString()} • {e.pendingReason || 'Submitted for approval'}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  placeholder="Send-back reason..."
                  value={rejectReasonById[e.id] || ''}
                  onChange={ev => setRejectReasonById(prev => ({ ...prev, [e.id]: ev.target.value }))}
                  className="px-2.5 py-1.5 rounded-xl border text-xs font-bold bg-white dark:bg-slate-800"
                />
                <button
                  onClick={() => onApproveEntry(e.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-black"
                >
                  Approve Entry
                </button>
                <button
                  onClick={() => onSendBackEntry(e.id, rejectReasonById[e.id] || 'Verify ledger code & re-submit')}
                  className="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-black"
                >
                  Send Back
                </button>
              </div>
            </div>
          );
        })}

        {myProfileReqs.map(req => {
          const emp = users.find(u => u.id === req.userId);
          return (
            <div
              key={req.id}
              className="p-3.5 rounded-2xl border border-blue-200 bg-blue-50/40 dark:bg-slate-900 flex items-center justify-between text-xs"
            >
              <div>
                <span className="font-black">{emp?.name}</span> requested profile/CV/health updates.
              </div>
              <button
                onClick={() => onApproveProfileReq(req.id)}
                className="px-3.5 py-1.5 rounded-xl bg-[#0D2B5B] text-amber-300 font-black"
              >
                Approve Profile Update
              </button>
            </div>
          );
        })}

        {myJobReqs.map(req => {
          const emp = users.find(u => u.id === req.userId);
          return (
            <div
              key={req.id}
              className="p-3.5 rounded-2xl border border-purple-200 bg-purple-50/40 dark:bg-slate-900 flex items-center justify-between text-xs"
            >
              <div>
                <span className="font-black">{emp?.name}</span> requested JD detail change: <strong>{req.newTitle}</strong> ({req.newTimeSlot})
              </div>
              <button
                onClick={() => onApproveJobDetailReq(req.id)}
                className="px-3.5 py-1.5 rounded-xl bg-[#0D2B5B] text-amber-300 font-black"
              >
                Approve JD Change
              </button>
            </div>
          );
        })}
      </div>

      {/* Hierarchical Team Tree & Leave Reassignment */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className={`lg:col-span-5 p-5 rounded-3xl border ${cardSurface} space-y-2.5`}>
          <h3 className="font-black text-sm text-[#0D2B5B] dark:text-amber-300">
            Reporting Tree ({visibleStaff.length} Members)
          </h3>
          {visibleStaff.map(u => {
            const sup = users.find(s => s.id === u.supervisorId);
            return (
              <div
                key={u.id}
                onClick={() => setSelectedStaffId(u.id)}
                className={`p-3 rounded-2xl border cursor-pointer transition ${
                  selectedStaffId === u.id
                    ? 'border-amber-400 bg-blue-50/70 dark:bg-slate-800'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black">
                      {u.name} {u.onLeave && <span className="text-rose-500">(ON LEAVE)</span>}
                    </div>
                    <div className="text-[10px] opacity-65">
                      {u.roleTitle} • Reports to: {sup?.name.split(' ')[0] || 'Board'}
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold ${BRAIN_COLOR_STYLES[u.brainColor]?.badge}`}>
                    {u.brainColor}
                  </span>
                </div>

                {canManageLeave && u.id !== currentUser.id && (
                  <div className="mt-2 pt-2 border-t border-slate-200/70 dark:border-slate-700 flex items-center gap-1.5">
                    <select
                      value={coverIdByStaff[u.id] || ''}
                      onChange={e => setCoverIdByStaff(prev => ({ ...prev, [u.id]: e.target.value }))}
                      onClick={e => e.stopPropagation()}
                      className="flex-1 px-2 py-1 rounded-lg border text-[10px] font-bold bg-transparent"
                    >
                      <option value="" className="text-slate-900">Select covering officer...</option>
                      {users
                        .filter(x => x.id !== u.id)
                        .map(x => (
                          <option key={x.id} value={x.id} className="text-slate-900">
                            {x.name.split(' ')[0]}
                          </option>
                        ))}
                    </select>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        onToggleLeaveCoverage(u.id, !u.onLeave, coverIdByStaff[u.id] || 'hansi');
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-black ${
                        u.onLeave ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                      }`}
                    >
                      {u.onLeave ? 'Mark Present' : 'Mark Leave & Reassign'}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Subordinate Live Status */}
        <div className={`lg:col-span-7 p-5 rounded-3xl border ${cardSurface} space-y-3`}>
          {(() => {
            const target = users.find(u => u.id === selectedStaffId) || currentUser;
            const sTasks = tasks.filter(t => t.userId === target.id);
            const sRecs = bankRecs.filter(r => r.userId === target.id);
            return (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-black">{target.name}</h3>
                    <p className="text-xs opacity-70">
                      {target.roleTitle} • FLI Tenure: {calculateTenure(target.joiningDate)}
                    </p>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-600">
                    Recs Done: {sRecs.filter(r => r.status === 'completed').length}/{sRecs.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {sTasks.map(t => (
                    <div
                      key={t.id}
                      className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold">{t.title}</div>
                        <div className="text-[11px] opacity-65">{t.timeSlot}</div>
                      </div>
                      <FourStageBadge status={t.status} />
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 11. REPORTS & ANALYTICS PORTAL (Standardized Day-End Handover PDF + CSV)
// ============================================================================

function ReportsAnalyticsPortal({ currentUser, users, tasks, bankRecs, allocatedEntries, dutyInRecords, darkMode }) {
  const todayStr = '2026-11-23';
  const [fromDate, setFromDate] = useState(todayStr);
  const [toDate, setToDate] = useState(todayStr);
  const [selectedEmpId, setSelectedEmpId] = useState(currentUser.id);
  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  const handlePrintEmployeeDayEndPdf = () => {
    const emp = users.find(u => u.id === selectedEmpId) || currentUser;
    const empTasks = tasks.filter(t => t.userId === emp.id);
    const empRecs = bankRecs.filter(r => r.userId === emp.id);
    const empEntries = allocatedEntries.filter(e => e.assigneeId === emp.id);

    const win = window.open('', '_blank', 'width=920,height=740');
    if (!win) return;
    win.document.write(`
      <html>
        <head>
          <title>FLi Pinnacle - Standardized Day-End Handover Report (${emp.name})</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 28px; color: #0f172a; }
            .header { border-bottom: 3px solid #0D2B5B; padding-bottom: 12px; margin-bottom: 18px; display: flex; justify-content: space-between; }
            .badge { background: #FACC15; color: #0D2B5B; padding: 4px 10px; font-weight: bold; border-radius: 6px; font-size: 12px; }
            h2 { color: #0D2B5B; font-size: 14px; margin-top: 20px; border-left: 4px solid #FACC15; padding-left: 8px; }
            table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 12px; }
            th { background: #0D2B5B; color: #FACC15; text-align: left; padding: 8px; }
            td { border: 1px solid #cbd5e1; padding: 7px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div style="font-size:20px;font-weight:900;color:#0D2B5B;">FLi Pinnacle — Future Life Investments Limited</div>
              <div style="font-size:13px;font-weight:bold;margin-top:4px;">Standardized Day-End Handover &amp; Activity Report</div>
            </div>
            <div style="text-align:right;font-size:12px;">
              <span class="badge">${emp.empCode}</span><br/>
              <strong>${emp.name}</strong> (${emp.roleTitle})<br/>
              Period: ${fromDate} to ${toDate} | Duty In: ${dutyInRecords[emp.id] || '08:30 AM'}
            </div>
          </div>

          <h2>1. Completed &amp; Pending Tasks with Reasons (${empTasks.length})</h2>
          <table>
            <thead><tr><th>KPI / Task</th><th>Time Slot</th><th>Allocated</th><th>Actual</th><th>Status</th><th>Remarks / Reason</th></tr></thead>
            <tbody>
              ${empTasks
                .map(
                  t =>
                    `<tr><td>${t.title}</td><td>${t.timeSlot}</td><td>${t.allocatedMinutes}m</td><td>${
                      t.actualMinutes || 0
                    }m</td><td>${t.status}</td><td>${t.remark || '-'}</td></tr>`
                )
                .join('')}
            </tbody>
          </table>

          <h2>2. Bank Reconciliations Status (${empRecs.filter(r => r.status === 'completed').length}/${empRecs.length} Completed)</h2>
          <table>
            <thead><tr><th>Bank Account</th><th>Variance Tag</th><th>Status</th><th>Remarks</th></tr></thead>
            <tbody>
              ${empRecs
                .map(r => `<tr><td>${r.account}</td><td>${r.tag || '-'}</td><td>${r.status}</td><td>${r.remark || '-'}</td></tr>`)
                .join('')}
            </tbody>
          </table>

          <h2>3. Entries Handled / Escalated (${empEntries.length})</h2>
          <table>
            <thead><tr><th>Bank</th><th>Description</th><th>Amount (Rs.)</th><th>Status</th><th>Escalation / Pending Reason</th></tr></thead>
            <tbody>
              ${empEntries
                .map(
                  e =>
                    `<tr><td>${e.bank}</td><td>${e.desc}</td><td>${e.amount.toLocaleString()}</td><td>${e.status}</td><td>${
                      e.pendingReason || '-'
                    }</td></tr>`
                )
                .join('')}
            </tbody>
          </table>
          <script>window.onload = function() { window.print(); };</script>
        </body>
      </html>
    `);
    win.document.close();
  };

  const downloadCsv = (filename, rows) => {
    const csv = rows.map(r => r.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border ${cardSurface} flex flex-wrap items-center justify-between gap-3`}>
        <div>
          <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">
            Reports &amp; Analytics Center (Standardized Day-End Handover PDF &amp; CSV)
          </h2>
          <p className="text-xs opacity-70">
            Export Duty In, Completed/Pending Tasks with Reasons, Entries Handled/Escalated, and Bank Reconciliations for any date period.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <input
            type="date"
            value={fromDate}
            onChange={e => setFromDate(e.target.value)}
            className="px-3 py-1.5 rounded-xl border font-bold bg-transparent"
          />
          <span>to</span>
          <input
            type="date"
            value={toDate}
            onChange={e => setToDate(e.target.value)}
            className="px-3 py-1.5 rounded-xl border font-bold bg-transparent"
          />
          <select
            value={selectedEmpId}
            onChange={e => setSelectedEmpId(e.target.value)}
            className="px-3 py-1.5 rounded-xl border font-extrabold bg-transparent"
          >
            {users.map(u => (
              <option key={u.id} value={u.id} className="text-slate-900">
                {u.name}
              </option>
            ))}
          </select>
          <button
            onClick={handlePrintEmployeeDayEndPdf}
            className="px-4 py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-black flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Day-End Handover PDF</span>
          </button>
        </div>
      </div>

      {/* Quick CSV Report Exports */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: 'Standardized Day-End Handover CSV',
            desc: 'Duty In, Completed/Pending KPIs, Entries & Recs per staff',
            action: () =>
              downloadCsv(`FLi_DayEnd_Handover_${fromDate}.csv`, [
                ['Employee', 'Duty In', 'KPIs Done', 'Pending KPIs', 'Recs Done', 'Entries Handled/Escalated'],
                ...users.map(u => [
                  u.name,
                  dutyInRecords[u.id] || 'Pending',
                  tasks.filter(t => t.userId === u.id && t.status !== 'pending').length,
                  tasks.filter(t => t.userId === u.id && t.status === 'pending').length,
                  `${bankRecs.filter(r => r.userId === u.id && r.status === 'completed').length}/${bankRecs.filter(r => r.userId === u.id).length}`,
                  allocatedEntries.filter(e => e.assigneeId === u.id).length
                ])
              ])
          },
          {
            title: 'Duty-In & Attendance Report',
            desc: 'First login Duty-In timestamps across all 13 staff',
            action: () =>
              downloadCsv(`FLi_Attendance_${fromDate}_to_${toDate}.csv`, [
                ['Emp Code', 'Name', 'Role', 'Duty In Time', 'Leave Status'],
                ...users.map(u => [
                  u.empCode,
                  u.name,
                  u.roleTitle,
                  dutyInRecords[u.id] || 'Absent/Pending',
                  u.onLeave ? 'On Leave' : 'Present'
                ])
              ])
          },
          {
            title: 'Time Allocated vs Actual',
            desc: 'Planned KPI minutes vs actual time spent',
            action: () =>
              downloadCsv(`FLi_Time_Analysis_${fromDate}.csv`, [
                ['Employee', 'KPI', 'Time Slot', 'Allocated (Min)', 'Actual (Min)', 'Status'],
                ...tasks.map(t => [
                  users.find(u => u.id === t.userId)?.name,
                  t.title,
                  t.timeSlot,
                  t.allocatedMinutes,
                  t.actualMinutes,
                  t.status
                ])
              ])
          },
          {
            title: 'Bank Reconciliations (81) Audit',
            desc: 'Complete variance tags & remarks for all 81 accounts',
            action: () =>
              downloadCsv(`FLi_Bank_Reconciliations_${fromDate}.csv`, [
                ['Account', 'Assigned Officer', 'Variance Tag', 'Status', 'Remarks'],
                ...bankRecs.map(r => [r.account, users.find(u => u.id === r.userId)?.name, r.tag, r.status, r.remark])
              ])
          }
        ].map((rep, idx) => (
          <div key={idx} className={`p-4 rounded-3xl border ${cardSurface} flex flex-col justify-between space-y-3`}>
            <div>
              <div className="font-black text-sm text-[#0D2B5B] dark:text-amber-300">{rep.title}</div>
              <p className="text-xs opacity-70 mt-1">{rep.desc}</p>
            </div>
            <button
              onClick={rep.action}
              className="w-full py-2 rounded-xl bg-amber-400 text-[#0D2B5B] font-black text-xs flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CSV</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// 12. EMPLOYEE PROFILE, HEALTH, AUTO TENURE & CV (View Mode + Edit Mode)
// ============================================================================

function EmployeeProfileSettings({ currentUser, users, darkMode, onSubmitProfileUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [phone, setPhone] = useState(currentUser.phone);
  const [bio, setBio] = useState(currentUser.bio);
  const [photoUrl, setPhotoUrl] = useState(currentUser.photoUrl || '');
  const [heightCm, setHeightCm] = useState(currentUser.health?.heightCm || 165);
  const [weightKg, setWeightKg] = useState(currentUser.health?.weightKg || 60);
  const [bloodGroup, setBloodGroup] = useState(currentUser.health?.bloodGroup || 'O+');
  const [healthNotes, setHealthNotes] = useState(currentUser.health?.notes || '');

  const [newExpCompany, setNewExpCompany] = useState('');
  const [newExpRole, setNewExpRole] = useState('');
  const [newQualTitle, setNewQualTitle] = useState('');
  const [newQualInst, setNewQualInst] = useState('');

  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';
  const superior = users.find(u => u.id === currentUser.supervisorId);
  const waterMl = Math.round(Number(weightKg || 60) * 35);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhotoUrl(String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-5">
      <div className={`p-6 rounded-3xl border ${cardSurface} flex flex-wrap items-center justify-between gap-4`}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#0D2B5B] text-amber-300 border-2 border-amber-400 font-black text-2xl flex items-center justify-center overflow-hidden">
            {photoUrl ? <img src={photoUrl} alt={name} className="w-full h-full object-cover" /> : name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black">{currentUser.name}</h2>
              <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold ${BRAIN_COLOR_STYLES[currentUser.brainColor]?.badge}`}>
                {currentUser.brainColor} Brain
              </span>
            </div>
            <p className="text-xs opacity-75">
              {currentUser.roleTitle} • Reports to: {superior?.name || 'Board (HOD)'} • FLI Tenure:{' '}
              <strong>{calculateTenure(currentUser.joiningDate)}</strong> (Joined {currentUser.joiningDate})
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 rounded-2xl bg-[#0D2B5B] text-amber-300 font-black text-xs flex items-center gap-1.5"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>{isEditing ? 'Switch to View Mode' : 'Edit Profile & Health'}</span>
        </button>
      </div>

      {!isEditing ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className={`p-5 rounded-3xl border ${cardSurface} space-y-2 text-xs`}>
            <div className="font-black text-sm text-[#0D2B5B] dark:text-amber-300">Personal &amp; Contact</div>
            <div><strong>Employee Code:</strong> {currentUser.empCode}</div>
            <div><strong>Corporate Email:</strong> {currentUser.email}</div>
            <div><strong>Contact:</strong> {currentUser.phone}</div>
            <div><strong>Bio:</strong> {currentUser.bio}</div>
          </div>

          <div className={`p-5 rounded-3xl border ${cardSurface} space-y-2 text-xs`}>
            <div className="font-black text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-rose-500" /> Health &amp; Hydration Profile
            </div>
            <div><strong>Height:</strong> {heightCm} cm • <strong>Weight:</strong> {weightKg} kg</div>
            <div><strong>Blood Group:</strong> {bloodGroup}</div>
            <div><strong>Recommended Daily Water:</strong> {waterMl} ml ({Math.round(waterMl / 250)} glasses)</div>
            <div><strong>Wellness Note:</strong> {healthNotes || 'Active'}</div>
          </div>

          <div className={`p-5 rounded-3xl border ${cardSurface} space-y-2 text-xs`}>
            <div className="font-black text-sm text-[#0D2B5B] dark:text-amber-300">Experience &amp; Qualifications</div>
            <div><strong>FLI Auto-Tenure:</strong> {calculateTenure(currentUser.joiningDate)}</div>
            {currentUser.experiences?.map(ex => (
              <div key={ex.id}>• {ex.role} at {ex.company} ({ex.period})</div>
            ))}
            {currentUser.qualifications?.map(q => (
              <div key={q.id}>• {q.title} — {q.institute} ({q.year})</div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`p-6 rounded-3xl border ${cardSurface} space-y-4 text-xs`}>
          <div className="font-black text-sm text-[#0D2B5B] dark:text-amber-300">
            Modify Profile, Health Status, Experience &amp; Qualifications (Submitted to {superior?.name || 'HOD'} for Approval)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="font-bold block mb-1">Display Name</label>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 rounded-xl border font-bold bg-transparent" />
            </div>
            <div>
              <label className="font-bold block mb-1">Phone Number</label>
              <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-3 py-2 rounded-xl border font-bold bg-transparent" />
            </div>
            <div>
              <label className="font-bold block mb-1">Profile Photo</label>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="w-full text-xs" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div>
              <label className="font-bold block mb-1">Height (cm)</label>
              <input type="number" value={heightCm} onChange={e => setHeightCm(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border font-bold bg-transparent" />
            </div>
            <div>
              <label className="font-bold block mb-1">Weight (kg) — Auto Water Calc</label>
              <input type="number" value={weightKg} onChange={e => setWeightKg(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border font-bold bg-transparent" />
            </div>
            <div>
              <label className="font-bold block mb-1">Blood Group</label>
              <input value={bloodGroup} onChange={e => setBloodGroup(e.target.value)} className="w-full px-3 py-2 rounded-xl border font-bold bg-transparent" />
            </div>
            <div>
              <label className="font-bold block mb-1">Health Notes</label>
              <input value={healthNotes} onChange={e => setHealthNotes(e.target.value)} className="w-full px-3 py-2 rounded-xl border font-bold bg-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex gap-2">
              <input placeholder="Previous Company" value={newExpCompany} onChange={e => setNewExpCompany(e.target.value)} className="flex-1 px-3 py-2 rounded-xl border bg-transparent" />
              <input placeholder="Role" value={newExpRole} onChange={e => setNewExpRole(e.target.value)} className="flex-1 px-3 py-2 rounded-xl border bg-transparent" />
            </div>
            <div className="flex gap-2">
              <input placeholder="Qualification Title" value={newQualTitle} onChange={e => setNewQualTitle(e.target.value)} className="flex-1 px-3 py-2 rounded-xl border bg-transparent" />
              <input placeholder="Institute" value={newQualInst} onChange={e => setNewQualInst(e.target.value)} className="flex-1 px-3 py-2 rounded-xl border bg-transparent" />
            </div>
          </div>

          <button
            onClick={() => {
              const updatedExp = newExpCompany
                ? [...(currentUser.experiences || []), { id: `ex-${Date.now()}`, company: newExpCompany, role: newExpRole || 'Officer', period: 'Previous', status: 'approved' }]
                : currentUser.experiences;
              const updatedQual = newQualTitle
                ? [...(currentUser.qualifications || []), { id: `ql-${Date.now()}`, title: newQualTitle, institute: newQualInst || 'Institute', year: '2025', status: 'approved' }]
                : currentUser.qualifications;
              onSubmitProfileUpdate({
                name,
                phone,
                bio,
                photoUrl,
                health: { heightCm, weightKg, bloodGroup, notes: healthNotes },
                experiences: updatedExp,
                qualifications: updatedQual
              });
              setIsEditing(false);
            }}
            className="px-5 py-2.5 rounded-2xl bg-[#0D2B5B] text-amber-300 font-black"
          >
            Submit Profile &amp; Health Changes for Approval
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 13. RANGIKA'S HOD CONTROL CENTER (Staff, JDs, Reporting Lines & Live Status)
// ============================================================================

function ManagerAdminPanel({ users, tasks, dutyInRecords, bankRecs, darkMode, onUpdateUser, onAddTask, onUpdateTask }) {
  const [selectedStaffId, setSelectedStaffId] = useState('dinithi');
  const [newKpiTitle, setNewKpiTitle] = useState('');
  const [newKpiSlot, setNewKpiSlot] = useState('03:00 PM - 03:30 PM');
  const [newKpiMins, setNewKpiMins] = useState(30);
  const [newKpiCat, setNewKpiCat] = useState('Daily');
  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  const selectedStaff = users.find(u => u.id === selectedStaffId) || users[0];
  const staffTasks = tasks.filter(t => t.userId === selectedStaff.id);

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border ${cardSurface}`}>
        <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">
          Rangika’s HOD Control Center — Reporting Tree, JDs &amp; Live Attendance
        </h2>
        <p className="text-xs opacity-70">
          Modify reporting supervisors, Brain Colors, confidential JDs/KPIs, and inspect real-time attendance &amp; completion rates.
        </p>
      </div>

      {/* Live Attendance & As-At-Time Snapshot */}
      <div className={`p-5 rounded-3xl border ${cardSurface} overflow-x-auto`}>
        <h3 className="text-sm font-black mb-3">Live As-At-Time Attendance &amp; Work Status</h3>
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 dark:bg-slate-900 text-[10px] font-extrabold uppercase">
            <tr>
              <th className="p-2.5">Staff Member</th>
              <th className="p-2.5">Duty In</th>
              <th className="p-2.5">Reports To</th>
              <th className="p-2.5">Brain Color</th>
              <th className="p-2.5">KPIs Done</th>
              <th className="p-2.5">Bank Recs</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {users.map(u => {
              const uTasks = tasks.filter(t => t.userId === u.id);
              const uRecs = bankRecs.filter(r => r.userId === u.id);
              return (
                <tr key={u.id}>
                  <td className="p-2.5 font-extrabold">{u.name}</td>
                  <td className="p-2.5 font-mono text-emerald-600 font-bold">{dutyInRecords[u.id] || 'Not Logged In'}</td>
                  <td className="p-2.5">
                    <select
                      value={u.supervisorId || ''}
                      onChange={e => onUpdateUser(u.id, { supervisorId: e.target.value || null })}
                      className="px-2 py-1 rounded-lg border text-xs font-bold bg-transparent"
                    >
                      <option value="" className="text-slate-900">Board (HOD)</option>
                      {users
                        .filter(s => s.id !== u.id)
                        .map(s => (
                          <option key={s.id} value={s.id} className="text-slate-900">
                            {s.name}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td className="p-2.5">
                    <select
                      value={u.brainColor}
                      onChange={e => onUpdateUser(u.id, { brainColor: e.target.value })}
                      className="px-2 py-1 rounded-lg border text-xs font-bold bg-transparent"
                    >
                      {['Red', 'Green', 'Purple', 'Blue'].map(c => (
                        <option key={c} value={c} className="text-slate-900">{c}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-2.5 font-bold">
                    {uTasks.filter(t => t.status !== 'pending').length} / {uTasks.length}
                  </td>
                  <td className="p-2.5 font-bold">
                    {uRecs.filter(r => r.status === 'completed').length} / {uRecs.length}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Staff JD & KPI Editor */}
      <div className={`p-5 rounded-3xl border ${cardSurface} space-y-4`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-black">Edit Staff Confidential JD &amp; Time Allocations</h3>
          <select
            value={selectedStaffId}
            onChange={e => setSelectedStaffId(e.target.value)}
            className="px-3 py-1.5 rounded-xl border text-xs font-extrabold bg-transparent"
          >
            {users.map(u => (
              <option key={u.id} value={u.id} className="text-slate-900">
                {u.name} ({u.roleTitle})
              </option>
            ))}
          </select>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            if (!newKpiTitle.trim()) return;
            onAddTask({
              id: `t-hod-${Date.now()}`,
              userId: selectedStaff.id,
              title: newKpiTitle.trim(),
              category: newKpiCat,
              timeSlot: newKpiSlot,
              allocatedMinutes: Number(newKpiMins) || 30,
              actualMinutes: 0,
              status: 'pending',
              accepted: false,
              remark: 'Assigned by HOD Rangika',
              subItems: []
            });
            setNewKpiTitle('');
          }}
          className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs"
        >
          <input
            placeholder="New KPI / Job Title..."
            value={newKpiTitle}
            onChange={e => setNewKpiTitle(e.target.value)}
            className="sm:col-span-2 px-3 py-2 rounded-xl border font-bold bg-transparent"
          />
          <input
            placeholder="Time Slot"
            value={newKpiSlot}
            onChange={e => setNewKpiSlot(e.target.value)}
            className="px-3 py-2 rounded-xl border font-bold bg-transparent"
          />
          <select
            value={newKpiCat}
            onChange={e => setNewKpiCat(e.target.value)}
            className="px-3 py-2 rounded-xl border font-bold bg-transparent"
          >
            <option value="Daily" className="text-slate-900">Daily</option>
            <option value="Month End" className="text-slate-900">Month End</option>
          </select>
          <button type="submit" className="px-4 py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-black">
            + Assign KPI ({newKpiMins}m)
          </button>
        </form>

        <div className="space-y-2">
          {staffTasks.map(t => (
            <div key={t.id} className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="font-bold">{t.title}</div>
              <div className="flex items-center gap-2">
                <span className="opacity-70">{t.timeSlot}</span>
                <input
                  type="number"
                  value={t.allocatedMinutes}
                  onChange={e => onUpdateTask(t.id, { allocatedMinutes: Number(e.target.value) })}
                  className="w-16 px-2 py-1 rounded-lg border font-bold bg-transparent"
                />
                <span>min</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 14. OUR PLEDGE RATING, IDEA HUB, FEEDBACK BOX, NOTEPAD, LAN DROP & GAMES
// ============================================================================

function OurPledgeRatingPortal({ currentUser, users, topPledge, darkMode, onSubmitRating }) {
  const [targetUserId, setTargetUserId] = useState(users.find(u => u.id !== currentUser.id)?.id || 'mahasen');
  const [selectedScores, setSelectedScores] = useState({});
  const [comment, setComment] = useState('');
  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  const setPrincipleScore = (pId, val) => {
    setSelectedScores(prev => {
      const next = { ...prev };
      if (next[pId] === val) delete next[pId];
      else next[pId] = val;
      return next;
    });
  };

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border-2 border-amber-300 ${cardSurface} flex flex-wrap items-center justify-between gap-3`}>
        <div>
          <span className="text-[10px] font-black uppercase text-amber-600">Department Our Pledge Leader</span>
          <h2 className="text-xl font-black text-[#0D2B5B] dark:text-amber-300">
            {topPledge.user.name} — ★ {topPledge.avg} / 5.0
          </h2>
          <p className="text-xs opacity-70">
            Select only the specific Guiding Principle(s) observed (+1★ to +5★) or apply deduction marks (-1 to -3) if violated.
          </p>
        </div>
      </div>

      <div className={`p-5 rounded-3xl border ${cardSurface} space-y-4`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-sm font-black">Evaluate a Colleague</h3>
          <select
            value={targetUserId}
            onChange={e => setTargetUserId(e.target.value)}
            className="px-3 py-2 rounded-xl border text-xs font-extrabold bg-transparent"
          >
            {users
              .filter(u => u.id !== currentUser.id)
              .map(u => (
                <option key={u.id} value={u.id} className="text-slate-900">
                  {u.name} ({u.roleTitle})
                </option>
              ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {FLI_GUIDING_PRINCIPLES.map(p => {
            const val = selectedScores[p.id];
            return (
              <div key={p.id} className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-black text-xs text-[#0D2B5B] dark:text-amber-300">
                      #{p.id} {p.title}
                    </div>
                    <div className="text-[11px] opacity-65">{p.subtitle}</div>
                  </div>
                  <span className="text-xs font-black">
                    {typeof val === 'number' ? (val > 0 ? `+${val} ★` : `${val} Pts`) : 'Not Selected'}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {[-3, -2, -1].map(neg => (
                    <button
                      key={neg}
                      type="button"
                      onClick={() => setPrincipleScore(p.id, neg)}
                      className={`px-2 py-1 rounded-lg text-[10px] font-black ${
                        val === neg ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-700'
                      }`}
                    >
                      {neg}
                    </button>
                  ))}
                  {[1, 2, 3, 4, 5].map(pos => (
                    <button
                      key={pos}
                      type="button"
                      onClick={() => setPrincipleScore(p.id, pos)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-black ${
                        val === pos ? 'bg-amber-400 text-[#0D2B5B]' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      {pos}★
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Recognition or coaching note..."
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="flex-1 min-w-[220px] px-3 py-2 rounded-xl border text-xs font-bold bg-transparent"
          />
          <button
            onClick={() => {
              if (Object.keys(selectedScores).length === 0) return;
              onSubmitRating({
                id: `pr-${Date.now()}`,
                toUserId: targetUserId,
                fromUserId: currentUser.id,
                scores: selectedScores,
                comment
              });
              setSelectedScores({});
              setComment('');
            }}
            className="px-5 py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-black text-xs"
          >
            Submit Pledge Evaluation
          </button>
        </div>
      </div>
    </div>
  );
}

function IdeaHubPortal({ currentUser, users, ideas, categories, darkMode, onAddCategory, onAddIdea, onVoteIdea }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [customCat, setCustomCat] = useState('');
  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border ${cardSurface} space-y-3`}>
        <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">FLi Pinnacle New Idea Hub</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <input placeholder="Idea Title..." value={title} onChange={e => setTitle(e.target.value)} className="px-3 py-2 rounded-xl border font-bold bg-transparent" />
          <select value={category} onChange={e => setCategory(e.target.value)} className="px-3 py-2 rounded-xl border font-bold bg-transparent">
            {categories.map(c => (
              <option key={c} value={c} className="text-slate-900">{c}</option>
            ))}
          </select>
          <div className="flex gap-1">
            <input placeholder="+ Custom Category" value={customCat} onChange={e => setCustomCat(e.target.value)} className="flex-1 px-3 py-2 rounded-xl border bg-transparent" />
            <button
              onClick={() => {
                if (customCat.trim()) {
                  onAddCategory(customCat.trim());
                  setCategory(customCat.trim());
                  setCustomCat('');
                }
              }}
              className="px-3 py-2 rounded-xl bg-amber-400 text-[#0D2B5B] font-black"
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <input placeholder="Describe how this improves Future Life Investments Limited..." value={desc} onChange={e => setDesc(e.target.value)} className="flex-1 px-3 py-2 rounded-xl border text-xs bg-transparent" />
          <button
            onClick={() => {
              if (!title.trim()) return;
              onAddIdea({ id: `id-${Date.now()}`, title, desc, category, authorId: currentUser.id, votes: 1 });
              setTitle('');
              setDesc('');
            }}
            className="px-5 py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-black text-xs"
          >
            Post Idea
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ideas.map(idea => (
          <div key={idea.id} className={`p-4 rounded-3xl border ${cardSurface} flex items-center justify-between gap-3`}>
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-black">{idea.category}</span>
              <div className="font-black text-sm mt-1">{idea.title}</div>
              <p className="text-xs opacity-75">{idea.desc}</p>
              <div className="text-[10px] opacity-60 mt-1">By {users.find(u => u.id === idea.authorId)?.name}</div>
            </div>
            <button onClick={() => onVoteIdea(idea.id)} className="px-3 py-2 rounded-2xl bg-[#0D2B5B] text-amber-300 font-black text-xs">
              ▲ {idea.votes}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeedbackBoxPortal({ currentUser, users, feedbacks, categories, darkMode, onAddCategory, onAddFeedback }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [customCat, setCustomCat] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border ${cardSurface} space-y-3`}>
        <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">Department Feedback Box</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          <select value={category} onChange={e => setCategory(e.target.value)} className="px-3 py-2 rounded-xl border font-bold bg-transparent">
            {categories.map(c => (
              <option key={c} value={c} className="text-slate-900">{c}</option>
            ))}
          </select>
          <input placeholder="+ Custom Category" value={customCat} onChange={e => setCustomCat(e.target.value)} className="px-3 py-2 rounded-xl border bg-transparent" />
          <button
            onClick={() => {
              if (customCat.trim()) {
                onAddCategory(customCat.trim());
                setCategory(customCat.trim());
                setCustomCat('');
              }
            }}
            className="px-3 py-2 rounded-xl bg-amber-400 text-[#0D2B5B] font-black"
          >
            Add Category
          </button>
          <label className="flex items-center gap-1.5 font-bold ml-auto">
            <input type="checkbox" checked={anonymous} onChange={e => setAnonymous(e.target.checked)} />
            <span>Submit Anonymously</span>
          </label>
        </div>
        <div className="flex gap-2">
          <input placeholder="Write your feedback or shoutout..." value={text} onChange={e => setText(e.target.value)} className="flex-1 px-3 py-2 rounded-xl border text-xs bg-transparent" />
          <button
            onClick={() => {
              if (!text.trim()) return;
              onAddFeedback({ id: `fb-${Date.now()}`, category, text, authorId: currentUser.id, anonymous });
              setText('');
            }}
            className="px-5 py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-black text-xs"
          >
            Send Feedback
          </button>
        </div>
      </div>

      <div className="space-y-2.5">
        {feedbacks.map(f => (
          <div key={f.id} className={`p-4 rounded-2xl border ${cardSurface} text-xs`}>
            <div className="flex items-center justify-between mb-1">
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#0D2B5B] border border-blue-200 font-black text-[10px]">{f.category}</span>
              <span className="opacity-60">{f.anonymous ? 'Anonymous Staff' : users.find(u => u.id === f.authorId)?.name}</span>
            </div>
            <p className="font-medium">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonalNotepadPortal({ currentUser, notes, darkMode, onUpdateNotes }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border ${cardSurface} space-y-3`}>
        <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">
          Personal Private Scratchpad ({currentUser.name})
        </h2>
        <div className="flex flex-wrap gap-2 text-xs">
          <input
            placeholder="Note title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-56 px-3 py-2 rounded-xl border font-bold bg-transparent"
          />
          <input
            placeholder="Write private reconciliation reminders or cheque numbers..."
            value={body}
            onChange={e => setBody(e.target.value)}
            className="flex-1 min-w-[200px] px-3 py-2 rounded-xl border bg-transparent"
          />
          <button
            onClick={() => {
              if (!title.trim() && !body.trim()) return;
              onUpdateNotes([{ id: `n-${Date.now()}`, title: title || 'Quick Note', body }, ...notes]);
              setTitle('');
              setBody('');
            }}
            className="px-4 py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-black"
          >
            + Save Note
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes.map(n => (
          <div key={n.id} className={`p-4 rounded-2xl border ${cardSurface} text-xs space-y-1.5`}>
            <div className="flex items-center justify-between">
              <span className="font-black">{n.title}</span>
              <button
                onClick={() => onUpdateNotes(notes.filter(x => x.id !== n.id))}
                className="text-rose-500 text-[10px] font-bold"
              >
                Delete
              </button>
            </div>
            <p className="opacity-80 whitespace-pre-wrap">{n.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WifiQuickDropForm({ users, currentUser, wifiFiles, onUpload }) {
  const [category, setCategory] = useState('Cashflow');
  const [customCategory, setCustomCategory] = useState('');
  const [visibility, setVisibility] = useState('everyone');
  const [targetUserId, setTargetUserId] = useState(users.find(u => u.id !== currentUser.id)?.id || '');

  const visibleFiles = wifiFiles.filter(
    f => f.visibility === 'everyone' || f.targetUserId === currentUser.id || f.uploadedById === currentUser.id
  );

  return (
    <div className="space-y-2.5 text-xs">
      <div className="grid grid-cols-2 gap-1.5">
        <select value={category} onChange={e => setCategory(e.target.value)} className="px-2 py-1.5 rounded-xl border font-bold bg-transparent">
          {['Cashflow', 'Bank Statement', 'Voucher Scan', 'Other'].map(c => (
            <option key={c} value={c} className="text-slate-900">{c}</option>
          ))}
        </select>
        <select value={visibility} onChange={e => setVisibility(e.target.value)} className="px-2 py-1.5 rounded-xl border font-bold bg-transparent">
          <option value="everyone" className="text-slate-900">Visible: Everyone</option>
          <option value="selected" className="text-slate-900">Selected Person Only</option>
        </select>
      </div>

      {category === 'Other' && (
        <input
          placeholder="Custom file category..."
          value={customCategory}
          onChange={e => setCustomCategory(e.target.value)}
          className="w-full px-2.5 py-1.5 rounded-xl border font-bold bg-transparent"
        />
      )}

      {visibility === 'selected' && (
        <select
          value={targetUserId}
          onChange={e => setTargetUserId(e.target.value)}
          className="w-full px-2.5 py-1.5 rounded-xl border font-bold bg-transparent"
        >
          {users
            .filter(u => u.id !== currentUser.id)
            .map(u => (
              <option key={u.id} value={u.id} className="text-slate-900">
                Recipient: {u.name}
              </option>
            ))}
        </select>
      )}

      <label className="block w-full py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-black text-center cursor-pointer">
        + Drop File on Office LAN
        <input
          type="file"
          className="hidden"
          onChange={e => {
            const file = e.target.files?.[0];
            if (!file) return;
            onUpload({
              id: `wf-${Date.now()}`,
              name: file.name,
              size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
              category: category === 'Other' && customCategory.trim() ? customCategory.trim() : category,
              visibility,
              targetUserId: visibility === 'selected' ? targetUserId : '',
              uploadedById: currentUser.id,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
          }}
        />
      </label>

      <div className="max-h-36 overflow-y-auto space-y-1">
        {visibleFiles.slice(0, 5).map(f => (
          <div key={f.id} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
            <span className="truncate font-bold max-w-[175px]">{f.name}</span>
            <span className="text-[10px] opacity-65">{f.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatInputBox({ onSend }) {
  const [val, setVal] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!val.trim()) return;
        onSend(val);
        setVal('');
      }}
      className="p-2.5 border-t border-slate-200 dark:border-slate-800 flex gap-1.5"
    >
      <input
        type="text"
        placeholder="Type message..."
        value={val}
        onChange={e => setVal(e.target.value)}
        className="flex-1 px-3 py-1.5 rounded-xl border text-xs font-medium bg-transparent"
      />
      <button type="submit" className="p-2 rounded-xl bg-[#0D2B5B] text-amber-300">
        <Send className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}

function BreakTimeGamePortal({ darkMode }) {
  const [activeGame, setActiveGame] = useState('math');
  const [mathNums, setMathNums] = useState([45, 78]);
  const [mathAns, setMathAns] = useState('');
  const [mathScore, setMathScore] = useState(0);

  const [secretNum, setSecretNum] = useState(() => Math.floor(Math.random() * 20) + 1);
  const [guessVal, setGuessVal] = useState('');
  const [guessMsg, setGuessMsg] = useState('Guess a number between 1 and 20');

  const [jumpScore, setJumpScore] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const [snakeScore, setSnakeScore] = useState(0);
  const [memoryFlipped, setMemoryFlipped] = useState([]);
  const [memoryMatched, setMemoryMatched] = useState([]);
  const memorySymbols = ['Rs', 'FD', 'GL', 'JV', 'Rs', 'FD', 'GL', 'JV'];

  const cardSurface = darkMode ? 'bg-[#0F1B33] border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  return (
    <div className="space-y-5">
      <div className={`p-5 rounded-3xl border ${cardSurface} flex flex-wrap items-center justify-between gap-3`}>
        <div>
          <h2 className="text-lg font-black text-[#0D2B5B] dark:text-amber-300">FLi Pinnacle Break-Time Arcade</h2>
          <p className="text-xs opacity-70">5 simple brain-refresh games for your scheduled break.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'math', label: '1. Ledger Speed Math' },
            { id: 'snake', label: '2. Golden Snake' },
            { id: 'jump', label: '3. Hurdle Jump Runner' },
            { id: 'memory', label: '4. Icon Memory Match' },
            { id: 'guess', label: '5. Number Guess' }
          ].map(g => (
            <button
              key={g.id}
              onClick={() => setActiveGame(g.id)}
              className={`px-3 py-2 rounded-xl text-xs font-black ${
                activeGame === g.id ? 'bg-[#0D2B5B] text-amber-300' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {activeGame === 'math' && (
        <div className={`p-6 rounded-3xl border ${cardSurface} max-w-md space-y-3 text-center`}>
          <div className="text-xs font-black uppercase text-amber-600">Score: {mathScore}</div>
          <div className="text-3xl font-black">
            {mathNums[0]} + {mathNums[1]} = ?
          </div>
          <div className="flex gap-2 justify-center">
            <input
              type="number"
              value={mathAns}
              onChange={e => setMathAns(e.target.value)}
              className="w-28 px-3 py-2 rounded-xl border text-center font-black bg-transparent"
            />
            <button
              onClick={() => {
                if (Number(mathAns) === mathNums[0] + mathNums[1]) setMathScore(s => s + 10);
                setMathNums([Math.floor(Math.random() * 90) + 10, Math.floor(Math.random() * 90) + 10]);
                setMathAns('');
              }}
              className="px-4 py-2 rounded-xl bg-[#0D2B5B] text-amber-300 font-black text-xs"
            >
              Check
            </button>
          </div>
        </div>
      )}

      {activeGame === 'snake' && (
        <div className={`p-6 rounded-3xl border ${cardSurface} max-w-md space-y-3 text-center`}>
          <div className="text-xs font-black uppercase text-amber-600">Golden Snake Score: {snakeScore}</div>
          <div className="grid grid-cols-5 gap-1.5 max-w-[220px] mx-auto p-3 rounded-2xl bg-slate-900">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                onClick={() => setSnakeScore(s => s + 5)}
                className={`h-8 rounded-lg cursor-pointer flex items-center justify-center text-xs font-black ${
                  i === (snakeScore / 5) % 25 ? 'bg-amber-400 text-[#0D2B5B]' : 'bg-slate-800 text-slate-600'
                }`}
              >
                {i === (snakeScore / 5) % 25 ? '★' : ''}
              </div>
            ))}
          </div>
          <p className="text-xs opacity-70">Tap the golden target node to grow your snake streak!</p>
        </div>
      )}

      {activeGame === 'jump' && (
        <div className={`p-6 rounded-3xl border ${cardSurface} max-w-md space-y-4 text-center`}>
          <div className="text-xs font-black uppercase text-emerald-600">Coins Collected: {jumpScore}</div>
          <div className="h-28 rounded-2xl bg-blue-50 dark:bg-slate-900 border relative overflow-hidden flex items-end justify-center pb-3">
            <div
              className={`w-10 h-10 rounded-xl bg-[#0D2B5B] text-amber-300 font-black flex items-center justify-center transition-transform duration-300 ${
                isJumping ? '-translate-y-12' : 'translate-y-0'
              }`}
            >
              FLi
            </div>
          </div>
          <button
            onClick={() => {
              if (isJumping) return;
              setIsJumping(true);
              setJumpScore(s => s + 1);
              setTimeout(() => setIsJumping(false), 350);
            }}
            className="px-6 py-2.5 rounded-2xl bg-[#0D2B5B] text-amber-300 font-black text-xs"
          >
            Jump &amp; Collect Coin!
          </button>
        </div>
      )}

      {activeGame === 'memory' && (
        <div className={`p-6 rounded-3xl border ${cardSurface} max-w-md space-y-3 text-center`}>
          <div className="text-xs font-black uppercase text-[#0D2B5B] dark:text-amber-300">
            Matched Pairs: {memoryMatched.length / 2} / 4
          </div>
          <div className="grid grid-cols-4 gap-2">
            {memorySymbols.map((sym, idx) => {
              const isOpen = memoryFlipped.includes(idx) || memoryMatched.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isOpen || memoryFlipped.length >= 2) return;
                    const next = [...memoryFlipped, idx];
                    setMemoryFlipped(next);
                    if (next.length === 2) {
                      if (memorySymbols[next[0]] === memorySymbols[next[1]]) {
                        setMemoryMatched(m => [...m, next[0], next[1]]);
                      }
                      setTimeout(() => setMemoryFlipped([]), 500);
                    }
                  }}
                  className={`h-14 rounded-2xl font-black text-sm border ${
                    isOpen ? 'bg-amber-400 text-[#0D2B5B]' : 'bg-[#0D2B5B] text-white'
                  }`}
                >
                  {isOpen ? sym : '?'}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {activeGame === 'guess' && (
        <div className={`p-6 rounded-3xl border ${cardSurface} max-w-md space-y-3 text-center`}>
          <div className="text-sm font-black">{guessMsg}</div>
          <div className="flex gap-2 justify-center">
            <input
              type="number"
              value={guessVal}
              onChange={e => setGuessVal(e.target.value)}
              className="w-24 px-3 py-2 rounded-xl border text-center font-black bg-transparent"
            />
            <button
              onClick={() => {
                const g = Number(guessVal);
                if (g === secretNum) {
                  setGuessMsg(`Correct! It was ${secretNum}! New number ready.`);
                  setSecretNum(Math.floor(Math.random() * 20) + 1);
                } else {
                  setGuessMsg(g < secretNum ? 'Too low — try higher!' : 'Too high — try lower!');
                }
                setGuessVal('');
              }}
              className="px-4 py-2 rounded-xl bg-amber-400 text-[#0D2B5B] font-black text-xs"
            >
              Guess
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
