import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as XLSX from 'xlsx';
import {
  LayoutGrid,
  CheckCircle2,
  Clock,
  AlertCircle,
  Send,
  FileSpreadsheet,
  Users,
  ShieldCheck,
  TrendingUp,
  Bell,
  Search,
  ChevronRight,
  ChevronDown,
  Plus,
  Filter,
  Download,
  Upload,
  Eye,
  EyeOff,
  Sparkles,
  Award,
  MessageSquare,
  Lightbulb,
  ThumbsUp,
  Heart,
  Smile,
  Flame,
  Calendar as CalendarIcon,
  UserCheck,
  FileCheck2,
  ArrowUpRight,
  ArrowDownLeft,
  Building2,
  Briefcase,
  Lock,
  Unlock,
  RefreshCw,
  CheckSquare,
  Square,
  SlidersHorizontal,
  Info,
  X,
  LogOut,
  UserPlus,
  Layers,
  Activity,
  BarChart3,
  PieChart,
  Star,
  HelpCircle,
  ExternalLink,
  Copy,
  Check,
  Wifi,
  FileText,
  Printer,
  Gamepad2,
  Droplets,
  Moon,
  Sun,
  User as UserIcon,
  Edit3,
  Flag,
  StickyNote,
  FolderOpen,
  CloudSun,
  Trophy,
  RotateCcw,
  ArrowRightLeft,
  Maximize2,
  ListChecks,
  AlertTriangle
} from 'lucide-react';

// ============================================================================
// FUTURE LIFE INVESTMENTS LIMITED - FINANCE DEPARTMENT WORKSPACE (FLi PINNACLE)
// ============================================================================

const INITIAL_EMPLOYEES = [
  {
    id: 'emp-rangika',
    name: 'Rangika [HOD Name]',
    shortName: 'Rangika',
    role: 'Head of Department - Finance',
    grade: 'HOD',
    supervisorId: null,
    avatar: 'RG',
    brainColor: 'Blue',
    status: 'Online',
    shift: '8:30 AM - 5:00 PM',
    email: 'rangika.hod@futurelife.lk',
    heightCm: 172,
    weightKg: 74,
    bloodGroup: 'O+',
    healthNotes: 'Ergonomic chair setup; prefers brief morning stand-up check-ins.',
    waterGlassesToday: 5,
    lastRestAt: Date.now() - 45 * 60000
  },
  {
    id: 'emp-mahasen',
    name: 'Mahasen Wijesooriya',
    shortName: 'Mahasen',
    role: 'Assistant Manager',
    grade: 'AM',
    supervisorId: 'emp-rangika',
    avatar: 'MW',
    brainColor: 'Green',
    status: 'Online',
    shift: '8:30 AM - 5:00 PM',
    email: 'mahasen.w@futurelife.lk',
    heightCm: 175,
    weightKg: 78,
    bloodGroup: 'B+',
    healthNotes: 'Monitors afternoon review queue; stretch break every 90 mins.',
    waterGlassesToday: 6,
    lastRestAt: Date.now() - 30 * 60000
  },
  {
    id: 'emp-nelka',
    name: 'Nelka Dilshan',
    shortName: 'Nelka',
    role: 'Senior Executive - Finance',
    grade: 'SE',
    supervisorId: 'emp-mahasen',
    avatar: 'ND',
    brainColor: 'Red',
    status: 'Online',
    shift: '8:30 AM - 5:00 PM',
    email: 'nelka.d@futurelife.lk',
    heightCm: 171,
    weightKg: 69,
    bloodGroup: 'A+',
    healthNotes: 'Active commuter; tracks hydration & eye rest during GL/branch reviews.',
    waterGlassesToday: 6,
    lastRestAt: Date.now() - 25 * 60000
  },
  {
    id: 'emp-shani',
    name: 'Shani Peterson',
    shortName: 'Shani',
    role: 'Senior Executive - Finance',
    grade: 'SE',
    supervisorId: 'emp-mahasen',
    avatar: 'SP',
    brainColor: 'Yellow',
    status: 'Online',
    shift: '8:30 AM - 5:00 PM',
    email: 'shani.p@futurelife.lk',
    heightCm: 162,
    weightKg: 58,
    bloodGroup: 'O+',
    healthNotes: 'Keeps water bottle at desk during morning statement allocation.',
    waterGlassesToday: 5,
    lastRestAt: Date.now() - 40 * 60000
  },
  {
    id: 'emp-dinithi',
    name: 'Dinithi Perera',
    shortName: 'Dinithi',
    role: 'Junior Finance Executive',
    grade: 'JFE',
    supervisorId: 'emp-shani',
    avatar: 'DP',
    brainColor: 'Green',
    status: 'Online',
    shift: '8:30 AM - 5:00 PM',
    email: 'dinithi.p@futurelife.lk',
    heightCm: 160,
    weightKg: 55,
    bloodGroup: 'AB+',
    healthNotes: 'Early morning slip attachment & petty cash float routine.',
    waterGlassesToday: 4,
    lastRestAt: Date.now() - 35 * 60000
  },
  {
    id: 'emp-charuka',
    name: 'Charuka Mihiranga',
    shortName: 'Charuka',
    role: 'Junior Finance Executive',
    grade: 'JFE',
    supervisorId: 'emp-shani',
    avatar: 'CM',
    brainColor: 'Blue',
    status: 'Online',
    shift: '8:30 AM - 5:00 PM',
    email: 'charuka.m@futurelife.lk',
    heightCm: 173,
    weightKg: 71,
    bloodGroup: 'B-',
    healthNotes: 'Focused voucher entry & reconciliation blocks.',
    waterGlassesToday: 5,
    lastRestAt: Date.now() - 50 * 60000
  },
  {
    id: 'emp-gayodya',
    name: 'Gayodya Athugala',
    shortName: 'Gayodya',
    role: 'Executive - Finance',
    grade: 'EF',
    supervisorId: 'emp-nelka',
    avatar: 'GA',
    brainColor: 'Yellow',
    status: 'Online',
    shift: '8:30 AM - 5:00 PM',
    email: 'gayodya.a@futurelife.lk',
    heightCm: 164,
    weightKg: 60,
    bloodGroup: 'A-',
    healthNotes: 'Daily cashflow & temporary receipt verification.',
    waterGlassesToday: 4,
    lastRestAt: Date.now() - 20 * 60000
  },
  {
    id: 'emp-nikeshala',
    name: 'Nikeshala Chandrasiri',
    shortName: 'Nikeshala',
    role: 'Executive - Finance',
    grade: 'EF',
    supervisorId: 'emp-nelka',
    avatar: 'NC',
    brainColor: 'Green',
    status: 'Online',
    shift: '8:30 AM - 5:00 PM',
    email: 'nikeshala.c@futurelife.lk',
    heightCm: 163,
    weightKg: 59,
    bloodGroup: 'O-',
    healthNotes: 'Morning bank balance & HO reconciliation focus.',
    waterGlassesToday: 5,
    lastRestAt: Date.now() - 38 * 60000
  },
  {
    id: 'emp-dilshan',
    name: 'Dilshan Chamara',
    shortName: 'Dilshan',
    role: 'Junior Executive - Finance',
    grade: 'JEF',
    supervisorId: 'emp-nelka',
    avatar: 'DC',
    brainColor: 'Red',
    status: 'On Leave',
    shift: '8:30 AM - 5:00 PM',
    email: 'dilshan.c@futurelife.lk',
    heightCm: 170,
    weightKg: 68,
    bloodGroup: 'B+',
    healthNotes: 'Scheduled recovery leave; duties covered by assigned backup.',
    waterGlassesToday: 3,
    lastRestAt: Date.now() - 120 * 60000
  },
  {
    id: 'emp-dhanushka',
    name: 'Dhanushka Madushan',
    shortName: 'Dhanushka',
    role: 'Accounts Assistant',
    grade: 'AA',
    supervisorId: 'emp-shani',
    avatar: 'DM',
    brainColor: 'Blue',
    status: 'Online',
    shift: '8:30 AM - 5:00 PM',
    email: 'dhanushka.m@futurelife.lk',
    heightCm: 169,
    weightKg: 66,
    bloodGroup: 'A+',
    healthNotes: 'Supporting voucher batches & ledger tallying.',
    waterGlassesToday: 5,
    lastRestAt: Date.now() - 28 * 60000
  }
];

const PLEDGE_PRINCIPLES = [
  { id: 1, title: 'Integrity & Financial Accuracy', desc: 'Zero compromise on ledger accuracy, audit trails, and truthful reporting.' },
  { id: 2, title: 'Timeliness & Cut-Off Discipline', desc: 'Meeting daily, weekly, and month-end deadlines with precision.' },
  { id: 3, title: 'Ownership & Accountability', desc: 'Taking full responsibility for assigned reconciliations, entries, and outcomes.' },
  { id: 4, title: 'Collaborative Handover', desc: 'Seamless document handover, clear notes, and timely acknowledgments.' },
  { id: 5, title: 'Proactive Risk & Variance Alerting', desc: 'Flagging discrepancies, unusual debits, or bottlenecks early.' },
  { id: 6, title: 'Continuous Process Improvement', desc: 'Simplifying workflows, reducing manual rework, and sharing smart ideas.' },
  { id: 7, title: 'Respectful & Directive Communication', desc: 'Clear, constructive, and empathetic teamwork across all grades.' },
  { id: 8, title: 'Confidentiality & Governance', desc: 'Safeguarding sensitive financial data, bank details, and company policies.' }
];

const INITIAL_DUTY_IN = {
  'emp-rangika': '08:18 AM',
  'emp-mahasen': '08:22 AM',
  'emp-nelka': '08:25 AM',
  'emp-shani': '08:24 AM',
  'emp-dinithi': '08:26 AM',
  'emp-charuka': '08:28 AM',
  'emp-gayodya': '08:27 AM',
  'emp-nikeshala': '08:29 AM',
  'emp-dilshan': 'On Leave',
  'emp-dhanushka': '08:28 AM'
};

const INITIAL_TASKS = [
  {
    id: 'task-dinithi-1',
    employeeId: 'emp-dinithi',
    title: 'Attaching Payment Slips & Handover to Shani',
    category: 'Daily Routine',
    scheduleType: 'Daily',
    timeSlot: '08:30 AM - 08:50 AM',
    allocatedMinutes: 20,
    actualMinutes: 18,
    status: 'Awaiting Acknowledgment',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: true,
    handedOverTo: 'emp-shani',
    handoverAcknowledged: false,
    handoverSentAt: '08:48 AM',
    detailNotes: 'Morning physical payment slips attached by branch/voucher ref and handed over to Shani.',
    subItems: [
      { id: 'sub-d1-1', label: 'Collect morning physical payment slips batch #01', done: true, needsHelp: false, helpReason: '' },
      { id: 'sub-d1-2', label: 'Verify slip amounts against voucher bundle & hand over to Shani', done: true, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-dinithi-2',
    employeeId: 'emp-dinithi',
    title: 'Petty Cash Float Count, Sheet Checking & Pass Entries',
    category: 'Cash & Petty Cash',
    scheduleType: 'Daily',
    timeSlot: '08:50 AM - 09:10 AM',
    allocatedMinutes: 20,
    actualMinutes: 20,
    status: 'Completed',
    approvalStatus: 'Approved',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Physical float tallied with petty cash book; zero variance.',
    subItems: [
      { id: 'sub-d2-1', label: 'Count physical cash notes & coins in petty cash box', done: true, needsHelp: false, helpReason: '' },
      { id: 'sub-d2-2', label: 'Update petty cash excel sheet & post entries', done: true, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-dinithi-3',
    employeeId: 'emp-dinithi',
    title: 'Daily System Entries / Daily Entries Voucher Printing',
    category: 'System Entries',
    scheduleType: 'Daily',
    timeSlot: '09:10 AM - 12:15 PM',
    allocatedMinutes: 185,
    actualMinutes: 110,
    status: 'In Progress',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Batch printing and posting daily journal vouchers.',
    subItems: [
      { id: 'sub-d3-1', label: 'Post morning receipt & payment journal entries (Batch A)', done: true, needsHelp: false, helpReason: '' },
      { id: 'sub-d3-2', label: 'Print & verify daily voucher set #104-#148', done: false, needsHelp: false, helpReason: '' },
      { id: 'sub-d3-3', label: 'File signed vouchers & log batch completion', done: false, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-dinithi-4',
    employeeId: 'emp-dinithi',
    title: 'Receivable / Payable Ledger Tally & Month-End Schedule',
    category: 'Ledger & Month-End',
    scheduleType: 'Month-End',
    timeSlot: '01:00 PM - 02:30 PM',
    allocatedMinutes: 90,
    actualMinutes: 0,
    status: 'Pending',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: false,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Reconcile supplier/customer open balances prior to monthly close.',
    subItems: [
      { id: 'sub-d4-1', label: 'Export aged receivables & payables sub-ledger', done: false, needsHelp: false, helpReason: '' },
      { id: 'sub-d4-2', label: 'Flag unmatched debit/credit balances for review', done: false, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-shani-1',
    employeeId: 'emp-shani',
    title: 'Daily Entries Sharing (Seylan & Sampath Allocation)',
    category: 'Bank & Entries Allocation',
    scheduleType: 'Daily',
    timeSlot: '08:50 AM - 09:30 AM',
    allocatedMinutes: 40,
    actualMinutes: 0,
    timerStarted: false,
    timerStartedAt: null,
    status: 'Pending',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Starts when Dinithi payment slips are acknowledged; completes when all allocated entries are acknowledged by assignees.',
    subItems: [
      { id: 'sub-s1-1', label: 'Acknowledge morning payment slips from Dinithi', done: false, needsHelp: false, helpReason: '' },
      { id: 'sub-s1-2', label: 'Upload & allocate Sampath (09810004042) & Seylan (013012776905002) rows', done: false, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-shani-2',
    employeeId: 'emp-shani',
    title: 'Corporate Payments Transfer & Pass Entries',
    category: 'Payments & Transfers',
    scheduleType: 'Daily',
    timeSlot: '09:30 AM - 11:30 AM',
    allocatedMinutes: 120,
    actualMinutes: 75,
    status: 'In Progress',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Process CEFTS/RTGS/SLIPS schedules and post corresponding entries.',
    subItems: [
      { id: 'sub-s2-1', label: 'Verify supplier & statutory payment schedule', done: true, needsHelp: false, helpReason: '' },
      { id: 'sub-s2-2', label: 'Post transfer entries & attach bank confirmation refs', done: false, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-shani-3',
    employeeId: 'emp-shani',
    title: 'Monthly WHT & Statutory Tax Schedule Sign-Off',
    category: 'Statutory & Month-End',
    scheduleType: 'Month-End',
    timeSlot: '02:00 PM - 04:00 PM',
    allocatedMinutes: 120,
    actualMinutes: 0,
    status: 'Pending',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: false,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Compile monthly WHT deductions and reconcile with GL tax control accounts.',
    subItems: [
      { id: 'sub-s3-1', label: 'Consolidate monthly WHT certificates & bank deductions', done: false, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-nelka-1',
    employeeId: 'emp-nelka',
    title: 'Branch Cash Flow Reporting & GL Tally Check',
    category: 'GL & Branch Control',
    scheduleType: 'Daily',
    timeSlot: '08:45 AM - 10:30 AM',
    allocatedMinutes: 105,
    actualMinutes: 95,
    status: 'Completed',
    approvalStatus: 'Approved',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Daily branch cash flow consolidated and GL control accounts tallied.',
    subItems: [
      { id: 'sub-n1-1', label: 'Consolidate branch inflows/outflows & opening balances', done: true, needsHelp: false, helpReason: '' },
      { id: 'sub-n1-2', label: 'Verify GL vs sub-ledger control totals', done: true, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-nelka-2',
    employeeId: 'emp-nelka',
    title: 'Third-Party Payment Processing & Variance Review',
    category: 'Payments & Audit',
    scheduleType: 'Daily',
    timeSlot: '10:30 AM - 12:15 PM',
    allocatedMinutes: 105,
    actualMinutes: 65,
    status: 'In Progress',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Review third-party disbursement batches and variance notes.',
    subItems: [
      { id: 'sub-n2-1', label: 'Audit third-party payment batch supporting docs', done: true, needsHelp: false, helpReason: '' },
      { id: 'sub-n2-2', label: 'Approve cleared disbursement entries', done: false, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-nelka-3',
    employeeId: 'emp-nelka',
    title: 'Month-End Branch P&L Consolidation & Review Pack',
    category: 'Month-End Reporting',
    scheduleType: 'Month-End',
    timeSlot: '01:30 PM - 04:30 PM',
    allocatedMinutes: 180,
    actualMinutes: 0,
    status: 'Pending',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Consolidate branch P&L schedules after bank reconciliations and accruals are locked.',
    subItems: [
      { id: 'sub-n3-1', label: 'Verify month-end accruals & inter-branch adjustments', done: false, needsHelp: false, helpReason: '' },
      { id: 'sub-n3-2', label: 'Submit consolidated branch P&L pack to Assistant Manager', done: false, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-mahasen-1',
    employeeId: 'emp-mahasen',
    title: 'Daily Finance Queue Supervision & Escalation Resolution',
    category: 'Supervision & Escalations',
    scheduleType: 'Daily',
    timeSlot: '09:00 AM - 11:00 AM',
    allocatedMinutes: 120,
    actualMinutes: 85,
    status: 'In Progress',
    approvalStatus: 'Approved',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Review escalated bank entries, approval queues, and morning cut-off milestones.',
    subItems: [
      { id: 'sub-m1-1', label: 'Review morning allocation readiness & pending escalations', done: true, needsHelp: false, helpReason: '' },
      { id: 'sub-m1-2', label: 'Sign off high-value payment & journal approvals', done: false, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-rangika-1',
    employeeId: 'emp-rangika',
    title: 'Department Governance, Liquidity & Month-End Sign-Off',
    category: 'HOD Governance',
    scheduleType: 'Daily',
    timeSlot: '09:30 AM - 11:30 AM',
    allocatedMinutes: 120,
    actualMinutes: 90,
    status: 'Completed',
    approvalStatus: 'Approved',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Department liquidity oversight, policy guidance, and exception sign-offs.',
    subItems: [
      { id: 'sub-r1-1', label: 'Review department cash position & audit exceptions', done: true, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-charuka-1',
    employeeId: 'emp-charuka',
    title: 'Voucher Batch Entry & Daily Ledger Matching',
    category: 'System Entries',
    scheduleType: 'Daily',
    timeSlot: '09:00 AM - 12:00 PM',
    allocatedMinutes: 180,
    actualMinutes: 140,
    status: 'In Progress',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Post allocated bank entries and match supporting vouchers.',
    subItems: [
      { id: 'sub-c1-1', label: 'Post assigned Sampath/Seylan entries', done: true, needsHelp: false, helpReason: '' },
      { id: 'sub-c1-2', label: 'Match voucher numbers against bank references', done: false, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-gayodya-1',
    employeeId: 'emp-gayodya',
    title: 'Daily Cashflow Update & Temporary Receipt Verification',
    category: 'Cashflow & Receipts',
    scheduleType: 'Daily',
    timeSlot: '08:30 AM - 10:30 AM',
    allocatedMinutes: 120,
    actualMinutes: 120,
    status: 'Completed',
    approvalStatus: 'Approved',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Daily cashflow sheet updated and temporary receipts checked.',
    subItems: [
      { id: 'sub-g1-1', label: 'Update daily cashflow tracker by 8:45 AM', done: true, needsHelp: false, helpReason: '' },
      { id: 'sub-g1-2', label: 'Verify deposit slips & assign receipt numbers', done: true, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-nikeshala-1',
    employeeId: 'emp-nikeshala',
    title: 'Morning Bank Balance & HO Reconciliation Update',
    category: 'Bank Reconciliations',
    scheduleType: 'Daily',
    timeSlot: '08:30 AM - 10:30 AM',
    allocatedMinutes: 120,
    actualMinutes: 105,
    status: 'Completed',
    approvalStatus: 'Approved',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Morning bank balances updated and HO bank reconciliations progressed.',
    subItems: [
      { id: 'sub-nk1-1', label: 'Compile morning bank balances across accounts', done: true, needsHelp: false, helpReason: '' }
    ]
  },
  {
    id: 'task-dhanushka-1',
    employeeId: 'emp-dhanushka',
    title: 'Batch Voucher Filing & Supporting Document Check',
    category: 'Documentation',
    scheduleType: 'Daily',
    timeSlot: '09:00 AM - 11:30 AM',
    allocatedMinutes: 150,
    actualMinutes: 95,
    status: 'In Progress',
    approvalStatus: 'Pending Approval',
    acceptedByOwner: true,
    handedOverTo: null,
    handoverAcknowledged: false,
    detailNotes: 'Verify payment/receipt attachments and organize daily voucher batches.',
    subItems: [
      { id: 'sub-dh1-1', label: 'Check attachment completeness on morning vouchers', done: true, needsHelp: false, helpReason: '' }
    ]
  }
];

const INITIAL_STATEMENTS = {
  sampath: {
    accountNo: '09810004042',
    bankName: 'Sampath Bank PLC',
    fileName: '09810004042_statement_sample.xlsx',
    uploadedAt: '08:55 AM',
    entries: [
      {
        id: 'smp-1',
        date: '2026-11-25',
        ref: 'S3017356',
        description: 'SVC-0034460536-42 TO TG MM - LOAN DISB VOUCHER 4412',
        side: 'Debit',
        amount: 200000,
        balance: 13023605.89,
        assignedTo: 'emp-dinithi',
        acknowledged: false,
        ackAt: null,
        completed: false,
        approved: false,
        pendingReason: '',
        escalatedToSuperior: false,
        escalatedAt: null,
        escalationReason: '',
        highlighted: true,
        note: 'Verify disbursement voucher #4412 before posting.'
      },
      {
        id: 'smp-2',
        date: '2026-11-25',
        ref: 'S3017360',
        description: '0034460537-42TOWMMM 009810004042 Future Life Investments',
        side: 'Debit',
        amount: 1000000,
        balance: 12023605.89,
        assignedTo: 'emp-charuka',
        acknowledged: true,
        ackAt: '09:02 AM',
        completed: false,
        approved: false,
        pendingReason: '',
        escalatedToSuperior: false,
        escalatedAt: null,
        escalationReason: '',
        highlighted: false,
        note: ''
      },
      {
        id: 'smp-3',
        date: '2026-11-25',
        ref: 'S3017366',
        description: 'CEFTS TRF / SLIPS PYMT - METROPOLITAN SUPPLIES INV-892',
        side: 'Debit',
        amount: 68500,
        balance: 11955105.89,
        assignedTo: '',
        acknowledged: false,
        ackAt: null,
        completed: false,
        approved: false,
        pendingReason: '',
        escalatedToSuperior: false,
        escalatedAt: null,
        escalationReason: '',
        highlighted: true,
        note: 'Unallocated debit — requires immediate assignment.'
      },
      {
        id: 'smp-4',
        date: '2026-11-25',
        ref: 'S3018515',
        description: 'BGT-2926 / BRANCH COLLECTION RECEIPT CREDIT',
        side: 'Credit',
        amount: 16000,
        balance: 11971105.89,
        assignedTo: 'emp-gayodya',
        acknowledged: true,
        ackAt: '09:05 AM',
        completed: true,
        approved: false,
        pendingReason: '',
        escalatedToSuperior: false,
        escalatedAt: null,
        escalationReason: '',
        highlighted: false,
        note: 'Matched with receipt batch.'
      },
      {
        id: 'smp-5',
        date: '2026-11-25',
        ref: 'S3026870',
        description: 'WHT REMITTANCE & LEASING SETTLEMENT REF-774',
        side: 'Debit',
        amount: 95000,
        balance: 11876105.89,
        assignedTo: 'emp-dhanushka',
        acknowledged: false,
        ackAt: null,
        completed: false,
        approved: false,
        pendingReason: 'Awaiting supplier WHT schedule confirmation',
        escalatedToSuperior: true,
        escalatedAt: Date.now() - 45 * 60000,
        escalationReason: 'Need superior guidance on WHT tax rate split.',
        highlighted: true,
        note: 'Escalated to Shani for review.'
      }
    ]
  },
  seylan: {
    accountNo: '013012776905002',
    bankName: 'Seylan Bank PLC',
    fileName: '013012776905002_statement_sample.xlsx',
    uploadedAt: '08:58 AM',
    entries: [
      {
        id: 'sey-1',
        date: '2026-11-25',
        ref: 'TRF 12776905 123',
        description: 'SUSPENSE ASSET / CURRENT ACCOUNT TRANSFER 013012776905002',
        side: 'Debit',
        amount: 721984.85,
        balance: 25000,
        assignedTo: 'emp-nelka',
        acknowledged: true,
        ackAt: '09:04 AM',
        completed: true,
        approved: true,
        pendingReason: '',
        escalatedToSuperior: false,
        escalatedAt: null,
        escalationReason: '',
        highlighted: true,
        note: 'Verified & posted to suspense asset.'
      },
      {
        id: 'sey-2',
        date: '2026-11-25',
        ref: 'NEG@@BO2609020000049',
        description: 'SUSPENSE LIABILITY / CUSTOMER DEPOSIT CREDIT 13012776905033',
        side: 'Credit',
        amount: 54000,
        balance: 746984.85,
        assignedTo: 'emp-nikeshala',
        acknowledged: false,
        ackAt: null,
        completed: false,
        approved: false,
        pendingReason: '',
        escalatedToSuperior: false,
        escalatedAt: null,
        escalationReason: '',
        highlighted: false,
        note: ''
      },
      {
        id: 'sey-3',
        date: '2026-11-25',
        ref: 'NEG@@BO2609020000047',
        description: 'SUSPENSE LIABILITY / DIRECT CREDIT 13012776905032',
        side: 'Credit',
        amount: 3500,
        balance: 692984.85,
        assignedTo: '',
        acknowledged: false,
        ackAt: null,
        completed: false,
        approved: false,
        pendingReason: '',
        escalatedToSuperior: false,
        escalatedAt: null,
        escalationReason: '',
        highlighted: false,
        note: ''
      }
    ]
  }
};

const INITIAL_RECONCILIATIONS = Array.from({ length: 81 }, (_, idx) => {
  const num = idx + 1;
  const owners = ['emp-nelka', 'emp-shani', 'emp-nikeshala', 'emp-charuka', 'emp-gayodya', 'emp-dinithi', 'emp-dhanushka'];
  const ownerId = owners[idx % owners.length];
  const bankPrefix = idx % 3 === 0 ? 'Sampath' : idx % 3 === 1 ? 'Seylan' : 'Commercial / BOC';
  const isDone = idx < 52;
  const tags = ['Matched', 'Timing Difference', 'Missing Slip', 'CRO / Bank Query'];
  return {
    id: `rec-${num}`,
    accountName: `${bankPrefix} A/C #${String(1000 + num).padStart(6, '0')} - ${idx % 2 === 0 ? 'Branch Collection' : 'HO Operational'}`,
    ownerId,
    completed: isDone,
    varianceTag: isDone ? 'Matched' : tags[idx % tags.length],
    remark: isDone
      ? 'Reconciled with GL & bank statement; zero unexplained variance.'
      : 'Pending bank advice / timing check in progress.',
    updatedAt: isDone ? '09:40 AM' : '11:15 AM'
  };
});

const INITIAL_MONTH_END_ITEMS = [
  {
    id: 'me-1',
    task: 'Lock All 81 Bank Reconciliations & Variance Schedules',
    ownerId: 'emp-nikeshala',
    targetDate: '2026-11-30',
    dependency: 'Ready (No blocker)',
    dependencyMet: true,
    progress: 85,
    status: 'In Progress'
  },
  {
    id: 'me-2',
    task: 'Month-End WHT, VAT & Statutory Tax Schedules',
    ownerId: 'emp-shani',
    targetDate: '2026-11-30',
    dependency: 'Requires Daily Entries & WHT Batch',
    dependencyMet: true,
    progress: 70,
    status: 'In Progress'
  },
  {
    id: 'me-3',
    task: 'Receivable / Payable Sub-Ledger Control Sign-Off',
    ownerId: 'emp-dinithi',
    targetDate: '2026-11-29',
    dependency: 'Requires Voucher Posting Complete',
    dependencyMet: true,
    progress: 60,
    status: 'In Progress'
  },
  {
    id: 'me-4',
    task: 'Consolidated Cash Flow & Branch P&L Preparation',
    ownerId: 'emp-nelka',
    targetDate: '2026-12-02',
    dependency: 'Depends on Bank Reconciliations & Ledger Lock',
    dependencyMet: false,
    progress: 40,
    status: 'Pending Dependency'
  },
  {
    id: 'me-5',
    task: 'HOD Final Financial Pack & Audit Exception Sign-Off',
    ownerId: 'emp-rangika',
    targetDate: '2026-12-03',
    dependency: 'Depends on Branch P&L & Cash Flow',
    dependencyMet: false,
    progress: 25,
    status: 'Scheduled'
  }
];

const INITIAL_CALENDAR_EVENTS = [
  {
    id: 'cal-1',
    date: '2026-11-25',
    title: 'Morning Cut-Off: Payment Slips & Statement Allocation',
    type: 'Scheduled Job',
    target: 'everyone',
    createdBy: 'emp-mahasen',
    approvalStatus: 'Approved'
  },
  {
    id: 'cal-2',
    date: '2026-11-25',
    title: 'Verify Unallocated Debit Entries Before Noon',
    type: 'Reminder',
    target: 'emp-shani',
    createdBy: 'emp-shani',
    approvalStatus: 'Approved'
  },
  {
    id: 'cal-3',
    date: '2026-11-27',
    title: 'Pre-Month-End Reconciliation Audit Check',
    type: 'Scheduled Job',
    target: 'everyone',
    createdBy: 'emp-nelka',
    approvalStatus: 'Approved'
  },
  {
    id: 'cal-4',
    date: '2026-11-30',
    title: 'Month-End Ledger & Bank Reconciliation Cut-Off',
    type: 'Scheduled Job',
    target: 'everyone',
    createdBy: 'emp-rangika',
    approvalStatus: 'Approved'
  }
];

const INITIAL_PLEDGE_RATINGS = [
  { id: 'pr-1', raterId: 'emp-nelka', targetId: 'emp-mahasen', principleId: 1, score: 5, comment: 'Thorough review on branch variances.' },
  { id: 'pr-2', raterId: 'emp-shani', targetId: 'emp-mahasen', principleId: 2, score: 5, comment: 'Fast escalation resolution before cut-off.' },
  { id: 'pr-3', raterId: 'emp-mahasen', targetId: 'emp-nelka', principleId: 3, score: 5, comment: 'Consistent ownership of branch cashflow & GL.' },
  { id: 'pr-4', raterId: 'emp-nelka', targetId: 'emp-dinithi', principleId: 4, score: 4, comment: 'Clear morning slip organization.' }
];

const INITIAL_IDEAS = [
  {
    id: 'idea-1',
    title: 'Standardized Narration Prefix Tagging for Sampath & Seylan',
    category: 'Bank & Entries Automation',
    authorId: 'emp-shani',
    desc: 'Tag recurring bank narration keywords so statement rows map faster during morning allocation.',
    votes: 7
  },
  {
    id: 'idea-2',
    title: 'Pre-Close Variance Checklist for Branch Reconciliations',
    category: 'Month-End & Audit',
    authorId: 'emp-nelka',
    desc: 'Standardize timing-difference notes before month-end cut-off to speed up review.',
    votes: 6
  }
];

const INITIAL_FEEDBACKS = [
  {
    id: 'fb-1',
    title: 'Morning Cut-Off Visibility Between 8:30 AM – 10:00 AM',
    category: 'Workflow & Timings',
    authorId: 'emp-dinithi',
    desc: 'Having a single strip showing slip handover and statement allocation status helps avoid morning bottlenecks.',
    status: 'Implemented'
  }
];

const INITIAL_LAN_FILES = [
  {
    id: 'lan-1',
    name: 'Sampath_09810004042_Nov25.xlsx',
    category: 'Bank Statements',
    visibility: 'everyone',
    targetId: null,
    uploadedBy: 'emp-shani',
    time: '08:55 AM',
    size: '148 KB'
  },
  {
    id: 'lan-2',
    name: 'Branch_Cashflow_Template_v2.xlsx',
    category: 'Other / Custom',
    customCategory: 'GL & Cashflow Pack',
    visibility: 'selected',
    targetId: 'emp-nelka',
    uploadedBy: 'emp-mahasen',
    time: '09:15 AM',
    size: '92 KB'
  }
];

const INITIAL_CHAT_MESSAGES = [
  {
    id: 'msg-1',
    channelType: 'group',
    channelId: 'finance-all',
    senderId: 'emp-mahasen',
    text: 'Good morning team! Let us keep morning slip handover and statement allocation smooth before 9:30 AM.',
    time: '08:35 AM'
  },
  {
    id: 'msg-2',
    channelType: 'group',
    channelId: 'finance-all',
    senderId: 'emp-dinithi',
    text: 'Morning payment slips prepared and handed over to Shani.',
    time: '08:48 AM'
  },
  {
    id: 'msg-3',
    channelType: 'dm',
    channelId: 'emp-shani',
    senderId: 'emp-nelka',
    text: 'Shani, let me know once the Sampath & Seylan unallocated debits are assigned.',
    time: '09:06 AM'
  }
];

const DAILY_QUOTES = [
  'Accuracy in small daily entries builds unshakable financial confidence.',
  'Clarity, ownership, and calm execution turn busy schedules into smooth milestones.',
  'Every reconciled number today saves hours of rework at month-end.',
  'Great finance teams win through timely handovers and transparent communication.'
];

// ============================================================================
// HELPER FUNCTIONS (GREETING, WEATHER, EXCEL PARSER, PDF DAY-END EXPORT)
// ============================================================================

function getTimeGreeting(date = new Date()) {
  const hour = date.getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

function getSuggestedAssignee(description = '', side = 'Debit') {
  const text = String(description).toUpperCase();
  if (text.includes('SLIPS') || text.includes('PETTY') || text.includes('VOUCHER')) return 'emp-dinithi';
  if (text.includes('WHT') || text.includes('TAX') || text.includes('RTGS')) return 'emp-shani';
  if (text.includes('SUSPENSE') || text.includes('GL') || text.includes('BRANCH')) return 'emp-nelka';
  if (text.includes('LEASING') || text.includes('LOAN') || text.includes('CEFTS')) return 'emp-charuka';
  if (side === 'Credit' || text.includes('RECEIPT') || text.includes('COLLECTION')) return 'emp-gayodya';
  return 'emp-dhanushka';
}

function getSlaAgingLabel(timestampMs) {
  if (!timestampMs) return null;
  const mins = Math.max(1, Math.floor((Date.now() - timestampMs) / 60000));
  if (mins >= 60) {
    const hrs = Math.floor(mins / 60);
    const rem = mins % 60;
    return `${hrs}h ${rem}m overdue`;
  }
  return `${mins} mins overdue`;
}

function parseBankStatementWorkbook(arrayBuffer, fallbackAccountNo) {
  const wb = XLSX.read(arrayBuffer, { type: 'array', cellDates: true });
  const firstSheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: '' });

  let headerRowIdx = 0;
  for (let i = 0; i < Math.min(rows.length, 25); i++) {
    const joined = rows[i].map((c) => String(c).toLowerCase()).join(' ');
    if (
      joined.includes('description') ||
      joined.includes('txn date') ||
      joined.includes('transaction date') ||
      joined.includes('amount')
    ) {
      headerRowIdx = i;
      break;
    }
  }

  const headers = rows[headerRowIdx].map((h) => String(h).trim().toLowerCase());
  const dateIdx = headers.findIndex((h) => h.includes('date'));
  const descIdx = headers.findIndex((h) => h.includes('description') || h.includes('narration') || h.includes('particulars'));
  const refIdx = headers.findIndex((h) => h.includes('ref') || h.includes('tran id') || h.includes('cheque') || h.includes('chq'));
  const sideIdx = headers.findIndex((h) => h.includes('cr/dr') || h.includes('cr /dr') || h.includes('type') || h.includes('d/c'));
  const amtIdx = headers.findIndex((h) => h.includes('amount') || h.includes('debit') || h.includes('credit'));
  const balIdx = headers.findIndex((h) => h.includes('balance'));

  const parsed = [];
  for (let r = headerRowIdx + 1; r < rows.length; r++) {
    const row = rows[r];
    if (!row || row.every((c) => String(c).trim() === '')) continue;

    let rawDate = dateIdx >= 0 ? row[dateIdx] : '2026-11-25';
    let formattedDate = '2026-11-25';
    if (rawDate instanceof Date && !isNaN(rawDate.getTime())) {
      formattedDate = rawDate.toISOString().slice(0, 10);
    } else if (String(rawDate).trim()) {
      formattedDate = String(rawDate).trim().slice(0, 16);
    }

    const rawDesc = descIdx >= 0 ? String(row[descIdx]).replace(/^'|'$/g, '').trim() : '';
    const rawRef = refIdx >= 0 ? String(row[refIdx]).replace(/^'|'$/g, '').trim() : `TXN-${r}`;
    let rawSide = sideIdx >= 0 ? String(row[sideIdx]).toUpperCase().trim() : '';

    let side = 'Debit';
    if (rawSide.includes('CR') || rawSide.includes('CREDIT')) {
      side = 'Credit';
    } else if (rawSide.includes('DR') || rawSide.includes('DEBIT')) {
      side = 'Debit';
    }

    const rawAmt = amtIdx >= 0 ? row[amtIdx] : 0;
    const numericAmt = Math.abs(parseFloat(String(rawAmt).replace(/,/g, '')) || 0);
    if (!rawDesc && numericAmt === 0) continue;

    const rawBal = balIdx >= 0 ? parseFloat(String(row[balIdx]).replace(/,/g, '')) : null;
    const cleanDesc = rawDesc || `Statement Entry (${fallbackAccountNo})`;

    parsed.push({
      id: `imp-${fallbackAccountNo}-${r}-${Date.now()}`,
      date: formattedDate,
      ref: rawRef || `REF-${r}`,
      description: cleanDesc,
      side,
      amount: numericAmt,
      balance: Number.isFinite(rawBal) ? rawBal : null,
      assignedTo: '',
      acknowledged: false,
      ackAt: null,
      completed: false,
      approved: false,
      pendingReason: '',
      escalatedToSuperior: false,
      escalatedAt: null,
      escalationReason: '',
      highlighted: false,
      note: ''
    });
  }

  return parsed.slice(0, 120);
}

function exportDayEndReportPdf(employee, dutyInTime, tasks, statements, reconciliations, employees) {
  const empTasks = tasks.filter((t) => t.employeeId === employee.id);
  const empEntries = Object.values(statements).flatMap((st) =>
    st.entries
      .filter((e) => e.assignedTo === employee.id)
      .map((e) => ({ ...e, accountNo: st.accountNo, bankName: st.bankName }))
  );
  const empRecs = reconciliations.filter((r) => r.ownerId === employee.id);
  const completedRecs = empRecs.filter((r) => r.completed).length;

  const win = window.open('', '_blank', 'width=900,height=700');
  if (!win) return;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Day-End Handover & Activity Report - ${employee.name}</title>
      <style>
        body { font-family: Arial, sans-serif; color: #0F172A; padding: 28px; line-height: 1.45; }
        .header { display: flex; justify-content: space-between; border-bottom: 3px solid #1E3A8A; padding-bottom: 14px; margin-bottom: 20px; }
        .brand { font-size: 20px; font-weight: 800; color: #1E3A8A; }
        .sub { font-size: 12px; color: #475569; }
        .meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px; }
        .meta-box { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 10px; }
        .meta-label { font-size: 10px; text-transform: uppercase; color: #64748B; font-weight: 700; }
        .meta-val { font-size: 14px; font-weight: 700; margin-top: 2px; }
        h3 { font-size: 14px; color: #1E3A8A; margin: 18px 0 8px; border-bottom: 1px solid #E2E8F0; padding-bottom: 4px; }
        table { width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 14px; }
        th, td { border: 1px solid #CBD5E1; padding: 7px 9px; text-align: left; }
        th { background: #EFF6FF; color: #1E3A8A; font-weight: 700; }
        .badge { padding: 2px 7px; border-radius: 999px; font-size: 10px; font-weight: 700; background: #E2E8F0; }
        .btn-print { background: #1E3A8A; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 700; margin-bottom: 16px; }
        @media print { .no-print { display: none; } }
      </style>
    </head>
    <body>
      <div class="no-print">
        <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <div class="header">
        <div>
          <div class="brand">FUTURE LIFE INVESTMENTS LIMITED — FLi PINNACLE</div>
          <div class="sub">Finance Department Standardized Day-End Handover & Activity Report</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700;">Date: 2026-11-25</div>
          <div class="sub">Generated: ${new Date().toLocaleTimeString()}</div>
        </div>
      </div>
      <div class="meta-grid">
        <div class="meta-box"><div class="meta-label">Employee</div><div class="meta-val">${employee.name}</div><div class="sub">${employee.role}</div></div>
        <div class="meta-box"><div class="meta-label">Duty In Time</div><div class="meta-val">${dutyInTime || '08:30 AM'}</div><div class="sub">Shift: ${employee.shift}</div></div>
        <div class="meta-box"><div class="meta-label">Tasks & Time</div><div class="meta-val">${empTasks.filter((t) => t.status === 'Completed').length}/${empTasks.length} Done</div><div class="sub">Logged: ${empTasks.reduce((a, b) => a + (b.actualMinutes || 0), 0)} mins</div></div>
        <div class="meta-box"><div class="meta-label">Reconciliations</div><div class="meta-val">${completedRecs}/${empRecs.length}</div><div class="sub">Hydration: ${employee.waterGlassesToday || 0} glasses</div></div>
      </div>

      <h3>1. Daily Tasks, Timings & Handover Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Task / KPI</th>
            <th>Schedule</th>
            <th>Alloc / Actual</th>
            <th>Status & Approval</th>
            <th>Notes / Reasons</th>
          </tr>
        </thead>
        <tbody>
          ${
            empTasks.length
              ? empTasks
                  .map(
                    (t) => `
                <tr>
                  <td><strong>${t.title}</strong><br/><span class="sub">${t.category} (${t.scheduleType})</span></td>
                  <td>${t.timeSlot}</td>
                  <td>${t.allocatedMinutes}m / ${t.actualMinutes || 0}m</td>
                  <td><span class="badge">${t.status}</span> • <span class="badge">${t.approvalStatus}</span></td>
                  <td>${t.rejectReason ? `Rejected: ${t.rejectReason}` : t.detailNotes || '-'}</td>
                </tr>`
                  )
                  .join('')
              : '<tr><td colspan="5">No tasks recorded for today.</td></tr>'
          }
        </tbody>
      </table>

      <h3>2. Allocated Bank Statement Entries Handled / Escalated</h3>
      <table>
        <thead>
          <tr>
            <th>Account & Ref</th>
            <th>Description</th>
            <th>Side & Amount</th>
            <th>State</th>
            <th>Reason / Escalation Note</th>
          </tr>
        </thead>
        <tbody>
          ${
            empEntries.length
              ? empEntries
                  .map((e) => {
                    const stLabel = e.approved
                      ? 'Approved'
                      : e.completed
                      ? 'Completed'
                      : e.acknowledged
                      ? 'Acknowledged'
                      : 'Assigned';
                    return `
                    <tr>
                      <td>${e.accountNo}<br/><span class="sub">${e.ref}</span></td>
                      <td>${e.description}</td>
                      <td>${e.side} • Rs. ${Number(e.amount || 0).toLocaleString()}</td>
                      <td><span class="badge">${stLabel}</span>${e.escalatedToSuperior ? ' • Escalated' : ''}</td>
                      <td>${e.escalationReason || e.pendingReason || e.note || '-'}</td>
                    </tr>`;
                  })
                  .join('')
              : '<tr><td colspan="5">No bank statement entries assigned today.</td></tr>'
          }
        </tbody>
      </table>

      <h3>3. Assigned Bank Reconciliations Status</h3>
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Status</th>
            <th>Variance Tag</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${empRecs
            .map(
              (r) => `
            <tr>
              <td>${r.accountName}</td>
              <td>${r.completed ? 'Completed' : 'Pending'}</td>
              <td>${r.varianceTag || 'Matched'}</td>
              <td>${r.remark || '-'}</td>
            </tr>`
            )
            .join('')}
        </tbody>
      </table>
    </body>
    </html>
  `;
  win.document.write(html);
  win.document.close();
}

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const [currentUserId, setCurrentUserId] = useState('emp-nelka');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [eyeCareMode, setEyeCareMode] = useState(false);
  const [nowTick, setNowTick] = useState(Date.now());
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [weather, setWeather] = useState({
    location: 'Kadawatha / Colombo, LK',
    tempC: 29,
    condition: 'Partly Sunny & Breeze'
  });

  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [dutyInMap, setDutyInMap] = useState(INITIAL_DUTY_IN);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [statements, setStatements] = useState(INITIAL_STATEMENTS);
  const [reconciliations, setReconciliations] = useState(INITIAL_RECONCILIATIONS);
  const [monthEndItems, setMonthEndItems] = useState(INITIAL_MONTH_END_ITEMS);
  const [calendarEvents, setCalendarEvents] = useState(INITIAL_CALENDAR_EVENTS);
  const [pledgeRatings, setPledgeRatings] = useState(INITIAL_PLEDGE_RATINGS);
  const [ideas, setIdeas] = useState(INITIAL_IDEAS);
  const [feedbacks, setFeedbacks] = useState(INITIAL_FEEDBACKS);
  const [lanFiles, setLanFiles] = useState(INITIAL_LAN_FILES);
  const [chatMessages, setChatMessages] = useState(INITIAL_CHAT_MESSAGES);

  const [notifications, setNotifications] = useState([
    {
      id: 'n-1',
      forUserId: 'emp-shani',
      title: 'Morning Payment Slips Handover from Dinithi',
      body: 'Dinithi handed over 08:30 AM payment slips. Acknowledge to approve Dinithi’s job & start your Daily Entries timer.',
      time: '08:48 AM',
      unread: true
    },
    {
      id: 'n-2',
      forUserId: 'all',
      title: 'Daily Cut-Off Strip Active',
      body: 'Morning chain: Dinithi Payment Slips → Shani Allocation → Daily Entries.',
      time: '08:50 AM',
      unread: false
    }
  ]);

  const [showNotifDrawer, setShowNotifDrawer] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [showLanPopover, setShowLanPopover] = useState(false);
  const [restBannerDismissed, setRestBannerDismissed] = useState(false);

  const currentUser = useMemo(
    () => employees.find((e) => e.id === currentUserId) || employees[0],
    [employees, currentUserId]
  );

  const pushNotification = (forUserId, title, body) => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setNotifications((prev) => [
      { id: `n-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, forUserId, title, body, time: timeStr, unread: true },
      ...prev
    ]);
  };

  useEffect(() => {
    const t = setInterval(() => setNowTick(Date.now()), 30000);
    const q = setInterval(() => setQuoteIdx((i) => (i + 1) % DAILY_QUOTES.length), 15000);
    return () => {
      clearInterval(t);
      clearInterval(q);
    };
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );
          if (res.ok) {
            const data = await res.json();
            if (data?.current_weather) {
              const code = data.current_weather.weathercode;
              const condText =
                code === 0 ? 'Clear Sky' : code <= 3 ? 'Partly Cloudy' : code >= 51 ? 'Light Rain / Showers' : 'Breezy & Mild';
              setWeather({
                location: `Local Area (${latitude.toFixed(1)}°, ${longitude.toFixed(1)}°)`,
                tempC: Math.round(data.current_weather.temperature),
                condition: condText
              });
            }
          }
        } catch {
          // Keep graceful default weather
        }
      },
      () => {},
      { timeout: 3000 }
    );
  }, []);

  // Auto-complete Shani's "Daily Entries Sharing" task when all allocated entries are acknowledged
  useEffect(() => {
    const allEntries = [...statements.sampath.entries, ...statements.seylan.entries];
    const assignedEntries = allEntries.filter((e) => e.assignedTo);
    const allAcked = assignedEntries.length > 0 && assignedEntries.every((e) => e.acknowledged);
    if (!allAcked) return;

    setTasks((prev) => {
      let triggered = false;
      const updated = prev.map((t) => {
        if (t.id === 'task-shani-1' && t.status !== 'Completed') {
          triggered = true;
          const elapsed = t.timerStartedAt ? Math.max(1, Math.round((Date.now() - t.timerStartedAt) / 60000)) : 25;
          return {
            ...t,
            status: 'Completed',
            approvalStatus: 'Approved',
            actualMinutes: t.actualMinutes || elapsed,
            completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
        }
        if (t.id === 'task-shani-2' && t.status === 'Pending') {
          return { ...t, status: 'In Progress', acceptedByOwner: true };
        }
        return t;
      });
      if (triggered) {
        pushNotification(
          'all',
          'Shani’s Daily Entries Sharing Completed → Next Scheduled Task Active',
          'All allocated statement entries were acknowledged. Shani’s task is marked Completed & Approved, moving automatically to Corporate Payments Transfer & Pass Entries.'
        );
      }
      return updated;
    });
  }, [statements]);

  const handleLoginAs = (empId) => {
    setCurrentUserId(empId);
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setDutyInMap((prev) => {
      if (prev[empId] && prev[empId] !== 'On Leave') return prev;
      return { ...prev, [empId]: nowTime };
    });
    setActiveTab('dashboard');
  };

  const handleAcknowledgeDinithiHandover = () => {
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === 'task-dinithi-1') {
          return {
            ...t,
            status: 'Completed',
            approvalStatus: 'Approved',
            handoverAcknowledged: true,
            acknowledgedAt: nowTime
          };
        }
        if (t.id === 'task-shani-1') {
          return {
            ...t,
            status: 'In Progress',
            timerStarted: true,
            timerStartedAt: Date.now(),
            subItems: t.subItems.map((s, idx) => (idx === 0 ? { ...s, done: true } : s))
          };
        }
        return t;
      })
    );
    pushNotification(
      'all',
      'Payment Slips Acknowledged by Shani',
      `Dinithi’s 08:30 AM Payment Slips job is Approved (${nowTime}) and Shani’s Daily Entries Sharing timer has started.`
    );
  };

  const handleAcceptTask = (taskId) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? { ...t, acceptedByOwner: true, status: t.status === 'Pending' ? 'In Progress' : t.status }
          : t
      )
    );
  };

  const handleHandoverTask = (taskId, targetEmpId, note = '') => {
    if (!targetEmpId) return;
    const targetEmp = employees.find((e) => e.id === targetEmpId);
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? {
              ...t,
              employeeId: targetEmpId,
              acceptedByOwner: false,
              handedOverFrom: currentUser.id,
              handoverAcknowledged: false,
              detailNotes: note ? `${t.detailNotes} [Handover note: ${note}]` : t.detailNotes
            }
          : t
      )
    );
    pushNotification(
      targetEmpId,
      `Task Handed Over by ${currentUser.shortName}`,
      `A task has been transferred to ${targetEmp?.name || 'you'}. Open My JD & KPIs to accept ownership.`
    );
  };

  const handleToggleSubItem = (taskId, subId) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== taskId) return t;
        const nextSubs = t.subItems.map((s) => (s.id === subId ? { ...s, done: !s.done, needsHelp: false } : s));
        const allDone = nextSubs.length > 0 && nextSubs.every((s) => s.done);
        return {
          ...t,
          subItems: nextSubs,
          status: allDone ? 'Completed' : 'In Progress',
          actualMinutes: Math.max(t.actualMinutes || 0, 15)
        };
      })
    );
  };

  const handleEscalateSubItem = (taskId, subId, reason) => {
    const owner = employees.find((e) => e.id === tasks.find((t) => t.id === taskId)?.employeeId);
    const superiorId = owner?.supervisorId || 'emp-mahasen';
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== taskId) return t;
        return {
          ...t,
          subItems: t.subItems.map((s) =>
            s.id === subId
              ? { ...s, needsHelp: true, helpReason: reason || 'Needs superior guidance', escalatedTo: superiorId, escalatedAt: Date.now() }
              : s
          )
        };
      })
    );
    pushNotification(
      superiorId,
      `Sub-Task Help Escalation from ${owner?.shortName || currentUser.shortName}`,
      `Reason: ${reason || 'Needs superior guidance'}`
    );
  };

  const handleUpdateTaskDetail = (taskId, newDetailNotes, addMinutes = 0) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? {
              ...t,
              detailNotes: newDetailNotes,
              actualMinutes: (t.actualMinutes || 0) + Number(addMinutes || 0),
              approvalStatus: 'Pending Approval'
            }
          : t
      )
    );
  };

  const handleApproveTask = (taskId) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, approvalStatus: 'Approved', rejectReason: '' } : t))
    );
  };

  const handleRejectTask = (taskId, reason) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? {
              ...t,
              status: 'Pending',
              approvalStatus: 'Rejected / Rework',
              rejectReason: reason || 'Returned by supervisor for correction.'
            }
          : t
      )
    );
  };

  // Efficiency calculation per employee
  const efficiencyLeaderboard = useMemo(() => {
    return employees
      .filter((e) => e.status !== 'On Leave')
      .map((emp) => {
        const empTasks = tasks.filter((t) => t.employeeId === emp.id);
        const totalAlloc = empTasks.reduce((a, b) => a + (b.allocatedMinutes || 30), 0) || 1;
        const doneMins = empTasks.reduce(
          (a, b) => a + (b.status === 'Completed' ? b.allocatedMinutes || 30 : Math.round((b.allocatedMinutes || 30) * 0.45)),
          0
        );
        const pct = Math.min(100, Math.round((doneMins / totalAlloc) * 100));
        return { emp, pct, completedCount: empTasks.filter((t) => t.status === 'Completed').length, totalCount: empTasks.length };
      })
      .sort((a, b) => b.pct - a.pct);
  }, [employees, tasks]);

  const topEfficient = efficiencyLeaderboard[0];

  // Morning cut-off chain status
  const morningChain = useMemo(() => {
    const dinithiSlipTask = tasks.find((t) => t.id === 'task-dinithi-1');
    const shaniAllocTask = tasks.find((t) => t.id === 'task-shani-1');
    const allEntries = [...statements.sampath.entries, ...statements.seylan.entries];
    const debits = allEntries.filter((e) => e.side === 'Debit');
    const unallocatedDebits = debits.filter((e) => !e.assignedTo).length;
    const unackedAssigned = allEntries.filter((e) => e.assignedTo && !e.acknowledged).length;

    return {
      slipDone: dinithiSlipTask?.status === 'Completed',
      shaniDone: shaniAllocTask?.status === 'Completed',
      unallocatedDebits,
      unackedAssigned,
      bottleneck:
        dinithiSlipTask?.status !== 'Completed'
          ? 'Waiting on Shani to acknowledge Dinithi’s morning payment slips'
          : unallocatedDebits > 0
          ? `${unallocatedDebits} Debit statement entry/entries still Not Allocated`
          : unackedAssigned > 0
          ? `${unackedAssigned} assigned statement entry/entries awaiting assignee acknowledgment`
          : 'Morning allocation & acknowledgments on track!'
    };
  }, [tasks, statements]);

  // Continuous work rest reminder check (> 45 mins since last rest)
  const needsRestReminder = useMemo(() => {
    if (restBannerDismissed || currentUser.status === 'On Leave') return false;
    const minsSinceRest = (nowTick - (currentUser.lastRestAt || nowTick)) / 60000;
    return minsSinceRest >= 45;
  }, [nowTick, currentUser, restBannerDismissed]);

  const dailyWaterTargetMl = (currentUser.weightKg || 65) * 35;
  const dailyWaterGlassesTarget = Math.max(6, Math.round(dailyWaterTargetMl / 250));
  const waterConsumedMl = (currentUser.waterGlassesToday || 0) * 250;

  const surfaceBg = eyeCareMode ? 'bg-[#EFECE4] text-slate-900' : 'bg-[#F6F8FB] text-slate-900';
  const cardSurface = eyeCareMode
    ? 'bg-[#FAF8F3] border border-[#DFD8C8] shadow-xs'
    : 'bg-white border border-slate-200/80 shadow-xs';

  const navItems = [
    { id: 'dashboard', label: 'FLi Pinnacle', icon: LayoutGrid },
    { id: 'tasks', label: 'My JD & KPIs', icon: CheckSquare },
    { id: 'statements', label: 'Statement Allocation', icon: FileSpreadsheet },
    { id: 'reconciliations', label: '81 Reconciliations', icon: Layers },
    { id: 'monthend', label: 'Month-End Tracker', icon: CalendarIcon },
    { id: 'approvals', label: 'Tree & Approvals', icon: UserCheck },
    { id: 'pledge', label: 'Our Pledge', icon: Award },
    { id: 'ideas', label: 'New Idea Hub', icon: Lightbulb },
    { id: 'feedback', label: 'Feedback Box', icon: MessageSquare },
    { id: 'files', label: 'Wi-Fi LAN Drop', icon: Wifi },
    { id: 'reports', label: 'Reports & Day-End PDF', icon: BarChart3 },
    { id: 'games', label: 'Break-Time Games', icon: Gamepad2 },
    { id: 'profile', label: 'My Profile & Health', icon: UserIcon }
  ];

  const unreadCount = notifications.filter((n) => n.unread && (n.forUserId === currentUser.id || n.forUserId === 'all')).length;

  return (
    <div className={`min-h-screen flex ${surfaceBg} transition-colors duration-200 select-none`}>
      {/* ====================================================================
          COLLAPSIBLE ICON-RAIL SIDEBAR (ROYAL BLUE + GOLDEN ACCENT, NO BULKY BAR)
      ===================================================================== */}
      <aside
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
        className={`${
          sidebarExpanded ? 'w-64' : 'w-16'
        } shrink-0 bg-[#0F296B] text-white flex flex-col justify-between transition-all duration-200 z-30 sticky top-0 h-screen`}
      >
        <div>
          {/* White-Background Royal Blue Company Logo Header */}
          <div className="p-2.5 border-b border-blue-900/70">
            <div className="bg-white rounded-xl p-2 flex items-center gap-2.5 shadow-xs overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-[#0F296B] text-amber-300 font-black text-xs flex items-center justify-center shrink-0 tracking-tight">
                FLi
              </div>
              {sidebarExpanded && (
                <div className="min-w-0">
                  <div className="text-xs font-extrabold text-[#0F296B] truncate">FLi PINNACLE</div>
                  <div className="text-[10px] font-semibold text-slate-600 truncate">Future Life Investments</div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Items (Hidden Scrollbar) */}
          <nav
            className="mt-2 px-2 space-y-1 overflow-y-auto max-h-[calc(100vh-140px)]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  title={!sidebarExpanded ? item.label : undefined}
                  className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? 'bg-amber-400 text-[#0F296B] shadow-xs'
                      : 'text-blue-100 hover:bg-blue-800/70 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {sidebarExpanded && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Switch User Quick Selector */}
        <div className="p-2 border-t border-blue-900/70">
          <button
            onClick={() => setActiveTab('profile')}
            className="w-full flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-blue-800/70 transition text-left"
          >
            <div className="w-8 h-8 rounded-full bg-amber-400 text-[#0F296B] font-extrabold text-xs flex items-center justify-center shrink-0">
              {currentUser.avatar}
            </div>
            {sidebarExpanded && (
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">{currentUser.shortName}</div>
                <div className="text-[10px] text-blue-200 truncate">Duty In: {dutyInMap[currentUser.id] || '08:30 AM'}</div>
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* ====================================================================
          MAIN CONTENT SHELL
      ===================================================================== */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Utility Bar */}
        <header
          className={`sticky top-0 z-20 px-5 py-2.5 border-b backdrop-blur-md flex flex-wrap items-center justify-between gap-3 ${
            eyeCareMode ? 'bg-[#F5F2EA]/95 border-[#DFD8C8]' : 'bg-[#F6F8FB]/95 border-slate-200/80'
          }`}
        >
          <div className="flex items-center gap-3">
            <div>
              <div className="text-sm font-extrabold text-[#0F296B] tracking-tight">
                {getTimeGreeting(new Date(nowTick))}, {currentUser.shortName}
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-2">
                <span>{new Date(nowTick).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <span>•</span>
                <span>Duty In: <strong className="text-slate-700">{dutyInMap[currentUser.id] || '08:30 AM'}</strong></span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-slate-600">
                  <CloudSun className="w-3.5 h-3.5 text-amber-500" />
                  {weather.tempC}°C {weather.condition}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Quick Profile Switcher */}
            <select
              value={currentUserId}
              onChange={(e) => handleLoginAs(e.target.value)}
              className="text-xs font-semibold bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0F296B]/20"
            >
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name} ({emp.grade})
                </option>
              ))}
            </select>

            {/* Eye-Care Soft Mode Toggle */}
            <button
              onClick={() => setEyeCareMode((v) => !v)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition ${
                eyeCareMode
                  ? 'bg-amber-100 border-amber-300 text-amber-950'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title="Toggle Eye-Care Soft Mode"
            >
              {eyeCareMode ? <Moon className="w-3.5 h-3.5 text-amber-700" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
              <span>{eyeCareMode ? 'Eye-Care On' : 'Eye-Care'}</span>
            </button>

            {/* Top-Right Wi-Fi LAN File Drop Popover Trigger */}
            <div className="relative">
              <button
                onClick={() => setShowLanPopover((v) => !v)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-[#0F296B] hover:bg-blue-50/50 transition"
              >
                <Wifi className="w-3.5 h-3.5 text-blue-700" />
                <span>LAN Drop</span>
              </button>
              {showLanPopover && (
                <LanQuickDropPopover
                  employees={employees}
                  currentUser={currentUser}
                  lanFiles={lanFiles}
                  onAddFile={(fileObj) => setLanFiles((prev) => [fileObj, ...prev])}
                  onClose={() => setShowLanPopover(false)}
                  onOpenFull={() => {
                    setShowLanPopover(false);
                    setActiveTab('files');
                  }}
                />
              )}
            </div>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifDrawer((v) => !v)}
                className="relative p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-[#0F296B] text-[10px] font-extrabold flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              {showNotifDrawer && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-40">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-extrabold text-[#0F296B]">Notifications</span>
                    <button
                      onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))}
                      className="text-[11px] font-semibold text-blue-700 hover:underline"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 mt-1">
                    {notifications.map((n) => (
                      <div key={n.id} className={`py-2 text-xs ${n.unread ? 'bg-amber-50/50 px-2 rounded-lg' : ''}`}>
                        <div className="font-bold text-slate-800">{n.title}</div>
                        <div className="text-[11px] text-slate-600 mt-0.5">{n.body}</div>
                        <div className="text-[10px] text-slate-400 mt-1">{n.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Continuous Work Rest Reminder Banner */}
        {needsRestReminder && (
          <div className="mx-5 mt-3 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-amber-950 font-semibold">
              <Activity className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                Continuous work check: You’ve been active for 45+ mins. Take a short 3-minute eye & posture rest or drink water ({waterConsumedMl}/{dailyWaterTargetMl} ml today).
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  setEmployees((prev) =>
                    prev.map((e) => (e.id === currentUser.id ? { ...e, lastRestAt: Date.now() } : e))
                  );
                  setRestBannerDismissed(true);
                }}
                className="px-2.5 py-1 rounded-lg bg-[#0F296B] text-white font-semibold"
              >
                Took Rest
              </button>
              <button onClick={() => setRestBannerDismissed(true)} className="text-slate-500 hover:text-slate-800">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Morning Readiness & Cut-Off Strip (8:30 AM - 10:30 AM Chain) */}
        <div className="mx-5 mt-3 px-4 py-2 rounded-xl bg-white border border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-[#0F296B]">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>Morning Cut-Off Chain:</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${morningChain.slipDone ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'}`}>
              1. Dinithi Slips {morningChain.slipDone ? '✓' : 'Pending Ack'}
            </span>
            <span className="text-slate-400">→</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${morningChain.shaniDone ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-900'}`}>
              2. Shani Allocation {morningChain.shaniDone ? '✓' : `(${morningChain.unallocatedDebits} Unalloc Dr)`}
            </span>
            <span className="text-slate-400">→</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${morningChain.unackedAssigned === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
              3. Team Ack ({morningChain.unackedAssigned} Waiting)
            </span>
          </div>
          <div className="text-[11px] font-medium text-slate-600">{morningChain.bottleneck}</div>
        </div>

        {/* ==================================================================
            ACTIVE VIEW ROUTER
        =================================================================== */}
        <main className="p-5 flex-1">
          {activeTab === 'dashboard' && (
            <DashboardHub
              currentUser={currentUser}
              employees={employees}
              dutyInMap={dutyInMap}
              tasks={tasks}
              statements={statements}
              reconciliations={reconciliations}
              calendarEvents={calendarEvents}
              pledgeRatings={pledgeRatings}
              quote={DAILY_QUOTES[quoteIdx]}
              weather={weather}
              topEfficient={topEfficient}
              efficiencyLeaderboard={efficiencyLeaderboard}
              cardSurface={cardSurface}
              onNavigate={setActiveTab}
              onAcknowledgeDinithi={handleAcknowledgeDinithiHandover}
              onAddCalendarEvent={(ev) => {
                setCalendarEvents((prev) => [
                  {
                    ...ev,
                    id: `cal-${Date.now()}`,
                    createdBy: currentUser.id,
                    approvalStatus: ev.type === 'Scheduled Job' ? 'Pending Approval' : 'Approved'
                  },
                  ...prev
                ]);
                pushNotification(
                  ev.target === 'everyone' ? 'all' : ev.target,
                  `New Calendar ${ev.type}: ${ev.title}`,
                  `Scheduled for ${ev.date}${ev.target === 'everyone' ? ' (Visible to Everyone)' : ''}.`
                );
              }}
              onLogWater={() => {
                setEmployees((prev) =>
                  prev.map((e) =>
                    e.id === currentUser.id
                      ? { ...e, waterGlassesToday: (e.waterGlassesToday || 0) + 1, lastRestAt: Date.now() }
                      : e
                  )
                );
              }}
            />
          )}

          {activeTab === 'tasks' && (
            <MyTasksView
              currentUser={currentUser}
              employees={employees}
              tasks={tasks}
              cardSurface={cardSurface}
              onAcceptTask={handleAcceptTask}
              onHandoverTask={handleHandoverTask}
              onAcknowledgeDinithi={handleAcknowledgeDinithiHandover}
              onToggleSubItem={handleToggleSubItem}
              onEscalateSubItem={handleEscalateSubItem}
              onUpdateTaskDetail={handleUpdateTaskDetail}
            />
          )}

          {activeTab === 'statements' && (
            <StatementAllocationView
              currentUser={currentUser}
              employees={employees}
              statements={statements}
              setStatements={setStatements}
              cardSurface={cardSurface}
              pushNotification={pushNotification}
            />
          )}

          {activeTab === 'reconciliations' && (
            <ReconciliationsView
              currentUser={currentUser}
              employees={employees}
              reconciliations={reconciliations}
              setReconciliations={setReconciliations}
              cardSurface={cardSurface}
            />
          )}

          {activeTab === 'monthend' && (
            <MonthEndView
              employees={employees}
              monthEndItems={monthEndItems}
              setMonthEndItems={setMonthEndItems}
              cardSurface={cardSurface}
            />
          )}

          {activeTab === 'approvals' && (
            <ApprovalsTreeView
              currentUser={currentUser}
              employees={employees}
              tasks={tasks}
              calendarEvents={calendarEvents}
              setCalendarEvents={setCalendarEvents}
              onApproveTask={handleApproveTask}
              onRejectTask={handleRejectTask}
              cardSurface={cardSurface}
            />
          )}

          {activeTab === 'pledge' && (
            <OurPledgeView
              currentUser={currentUser}
              employees={employees}
              pledgeRatings={pledgeRatings}
              setPledgeRatings={setPledgeRatings}
              cardSurface={cardSurface}
            />
          )}

          {activeTab === 'ideas' && (
            <IdeaHubView
              currentUser={currentUser}
              employees={employees}
              ideas={ideas}
              setIdeas={setIdeas}
              cardSurface={cardSurface}
            />
          )}

          {activeTab === 'feedback' && (
            <FeedbackBoxView
              currentUser={currentUser}
              employees={employees}
              feedbacks={feedbacks}
              setFeedbacks={setFeedbacks}
              cardSurface={cardSurface}
            />
          )}

          {activeTab === 'files' && (
            <LanFilesView
              currentUser={currentUser}
              employees={employees}
              lanFiles={lanFiles}
              onAddFile={(f) => setLanFiles((prev) => [f, ...prev])}
              cardSurface={cardSurface}
            />
          )}

          {activeTab === 'reports' && (
            <ReportsAnalyticsView
              currentUser={currentUser}
              employees={employees}
              dutyInMap={dutyInMap}
              tasks={tasks}
              statements={statements}
              reconciliations={reconciliations}
              cardSurface={cardSurface}
            />
          )}

          {activeTab === 'games' && <BreakTimeGamesView cardSurface={cardSurface} />}

          {activeTab === 'profile' && (
            <ProfileHealthView
              currentUser={currentUser}
              employees={employees}
              dutyInMap={dutyInMap}
              dailyWaterTargetMl={dailyWaterTargetMl}
              dailyWaterGlassesTarget={dailyWaterGlassesTarget}
              cardSurface={cardSurface}
              onUpdateProfile={(updatedFields) => {
                setEmployees((prev) =>
                  prev.map((e) => (e.id === currentUser.id ? { ...e, ...updatedFields } : e))
                );
              }}
            />
          )}
        </main>
      </div>

      {/* ====================================================================
          FLOATING INSTANT MESSENGER (GROUP CHANNELS + 1-ON-1 DIRECT MESSAGES)
      ===================================================================== */}
      <div className="fixed bottom-4 right-4 z-40">
        {!showChatWidget ? (
          <button
            onClick={() => setShowChatWidget(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0F296B] text-white text-xs font-bold shadow-lg hover:bg-blue-900 transition"
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>Team Chat</span>
          </button>
        ) : (
          <InstantChatBox
            currentUser={currentUser}
            employees={employees}
            messages={chatMessages}
            onSend={(msg) => setChatMessages((prev) => [...prev, msg])}
            onClose={() => setShowChatWidget(false)}
          />
        )}
      </div>
    </div>
  );
}

// ============================================================================
// SUB-VIEWS & MODULES
// ============================================================================

function DashboardHub({
  currentUser,
  employees,
  dutyInMap,
  tasks,
  statements,
  reconciliations,
  calendarEvents,
  pledgeRatings,
  quote,
  weather,
  topEfficient,
  efficiencyLeaderboard,
  cardSurface,
  onNavigate,
  onAcknowledgeDinithi,
  onAddCalendarEvent,
  onLogWater
}) {
  const [selectedDate, setSelectedDate] = useState('2026-11-25');
  const [calTitle, setCalTitle] = useState('');
  const [calType, setCalType] = useState('Reminder');
  const [calTarget, setCalTarget] = useState('everyone');

  const myTasks = tasks.filter((t) => t.employeeId === currentUser.id);
  const myEntries = [...statements.sampath.entries, ...statements.seylan.entries].filter(
    (e) => e.assignedTo === currentUser.id
  );
  const completedRecCount = reconciliations.filter((r) => r.completed).length;

  // Pledge Top Performer
  const pledgeScores = useMemo(() => {
    const map = {};
    pledgeRatings.forEach((r) => {
      map[r.targetId] = (map[r.targetId] || 0) + Number(r.score || 0);
    });
    const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
    const topId = sorted[0]?.[0] || 'emp-mahasen';
    const topEmp = employees.find((e) => e.id === topId) || employees[1];
    return { topEmp, pts: sorted[0]?.[1] || 10 };
  }, [pledgeRatings, employees]);

  const eventsForSelectedDate = calendarEvents.filter(
    (ev) => ev.date === selectedDate && (ev.target === 'everyone' || ev.target === currentUser.id)
  );

  // November 2026 calendar grid (30 days, Nov 1 2026 is Sunday)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => {
    const d = String(i + 1).padStart(2, '0');
    return `2026-11-${d}`;
  });

  const handleCreateCal = (e) => {
    e.preventDefault();
    if (!calTitle.trim()) return;
    onAddCalendarEvent({
      date: selectedDate,
      title: calTitle.trim(),
      type: calType,
      target: calTarget
    });
    setCalTitle('');
  };

  return (
    <div className="space-y-5">
      {/* Inspirational Hero Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-[#0F296B] via-[#17398C] to-[#1E45A6] text-white p-5 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[11px] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Future Life Investments • FLi Pinnacle Workspace</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight">
            {getTimeGreeting()}, {currentUser.name}
          </h1>
          <p className="text-xs text-blue-100 italic">“{quote}”</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {currentUser.id === 'emp-shani' && tasks.find((t) => t.id === 'task-dinithi-1')?.status !== 'Completed' && (
            <button
              onClick={onAcknowledgeDinithi}
              className="px-3.5 py-2 rounded-xl bg-amber-400 text-[#0F296B] font-extrabold text-xs shadow-xs hover:bg-amber-300 transition"
            >
              Acknowledge Dinithi’s Slips (Start Timer)
            </button>
          )}
          <button
            onClick={() => onNavigate('statements')}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition"
          >
            Statement Allocation
          </button>
          <button
            onClick={() => onNavigate('reports')}
            className="px-3.5 py-2 rounded-xl bg-white text-[#0F296B] font-bold text-xs hover:bg-blue-50 transition"
          >
            Day-End PDF Report
          </button>
        </div>
      </div>

      {/* Top KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className={`${cardSurface} rounded-2xl p-4`}>
          <div className="text-[11px] font-bold uppercase text-slate-500">My Scheduled Tasks</div>
          <div className="text-2xl font-black text-[#0F296B] mt-1">
            {myTasks.filter((t) => t.status === 'Completed').length} / {myTasks.length}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Logged time: {myTasks.reduce((a, b) => a + (b.actualMinutes || 0), 0)} mins today
          </div>
        </div>

        <div className={`${cardSurface} rounded-2xl p-4`}>
          <div className="text-[11px] font-bold uppercase text-slate-500">My Bank Statement Entries</div>
          <div className="text-2xl font-black text-[#0F296B] mt-1">{myEntries.length}</div>
          <div className="text-xs text-slate-500 mt-1">
            {myEntries.filter((e) => e.completed).length} completed • {myEntries.filter((e) => !e.acknowledged).length} unacknowledged
          </div>
        </div>

        <div className={`${cardSurface} rounded-2xl p-4`}>
          <div className="text-[11px] font-bold uppercase text-slate-500">81 Bank Reconciliations</div>
          <div className="text-2xl font-black text-[#0F296B] mt-1">{completedRecCount} / 81</div>
          <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-[#0F296B] rounded-full"
              style={{ width: `${Math.round((completedRecCount / 81) * 100)}%` }}
            />
          </div>
        </div>

        <div className={`${cardSurface} rounded-2xl p-4 flex flex-col justify-between`}>
          <div>
            <div className="text-[11px] font-bold uppercase text-slate-500 flex items-center justify-between">
              <span>Hydration & Weather</span>
              <span className="text-amber-600 font-extrabold">{weather.tempC}°C</span>
            </div>
            <div className="text-lg font-extrabold text-[#0F296B] mt-1">
              {currentUser.waterGlassesToday || 0} Glasses ({(currentUser.waterGlassesToday || 0) * 250} ml)
            </div>
          </div>
          <button
            onClick={onLogWater}
            className="mt-2 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0F296B] font-bold text-xs hover:bg-blue-100 transition"
          >
            <Droplets className="w-3.5 h-3.5 text-blue-600" />
            <span>+1 Glass Water (250 ml)</span>
          </button>
        </div>
      </div>

      {/* Daily Efficient Employee Recognition + Department Top Performer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Most Efficient Employee Today */}
        <div className={`${cardSurface} rounded-2xl p-5`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <h2 className="text-sm font-extrabold text-[#0F296B]">Most Efficient Employee Today</h2>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
              {topEfficient?.pct || 0}% Output
            </span>
          </div>

          {topEfficient && (
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#0F296B] text-amber-300 font-black flex items-center justify-center shrink-0">
                {topEfficient.emp.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-extrabold text-slate-900 truncate">{topEfficient.emp.name}</div>
                <div className="text-xs text-slate-500 truncate">{topEfficient.emp.role}</div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 rounded-full transition-all"
                    style={{ width: `${topEfficient.pct}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            {efficiencyLeaderboard.slice(0, 4).map((item) => (
              <div key={item.emp.id} className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700">{item.emp.shortName}</span>
                <div className="flex items-center gap-2 w-40">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0F296B] rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                  <span className="font-bold text-slate-800 w-9 text-right">{item.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Classic Department Top Performer Card */}
        <div className={`${cardSurface} rounded-2xl p-5 border-2 border-amber-300/80 flex flex-col justify-between`}>
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-extrabold">
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                DEPARTMENT TOP PERFORMER
              </span>
              <span className="text-sm font-black text-amber-600">★ 5.00 / 5.0</span>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-14 h-14 rounded-full bg-emerald-700 text-white font-black text-base flex items-center justify-center ring-4 ring-amber-300 shrink-0">
                {pledgeScores.topEmp.avatar}
              </div>
              <div>
                <div className="text-base font-extrabold text-slate-900">{pledgeScores.topEmp.name}</div>
                <div className="text-xs text-slate-500">{pledgeScores.topEmp.role}</div>
                <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {pledgeScores.topEmp.brainColor} • {pledgeScores.pts} Pledge Pts
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('pledge')}
            className="mt-4 w-full py-2.5 rounded-xl bg-[#0F296B] text-amber-300 font-bold text-xs hover:bg-blue-900 transition flex items-center justify-center gap-1.5"
          >
            <span>Rate a Colleague on FLI Pledge →</span>
          </button>
        </div>
      </div>

      {/* Monthly Calendar with Reminders & Supervisor-Approved Scheduled Jobs */}
      <div className={`${cardSurface} rounded-2xl p-5`}>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-[#0F296B]" />
            <h2 className="text-sm font-extrabold text-[#0F296B]">November 2026 Calendar — Reminders & Scheduled Jobs</h2>
          </div>
          <span className="text-xs text-slate-500">Selected Date: <strong className="text-slate-800">{selectedDate}</strong></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Calendar Grid */}
          <div className="lg:col-span-2 grid grid-cols-7 gap-1.5">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d} className="text-center text-[11px] font-bold text-slate-400 py-1">
                {d}
              </div>
            ))}
            {daysInMonth.map((dateStr) => {
              const dayNum = Number(dateStr.slice(-2));
              const hasEvent = calendarEvents.some(
                (ev) => ev.date === dateStr && (ev.target === 'everyone' || ev.target === currentUser.id)
              );
              const isSelected = selectedDate === dateStr;
              return (
                <button
                  key={dateStr}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`h-12 rounded-xl border text-xs font-bold flex flex-col items-center justify-center transition ${
                    isSelected
                      ? 'bg-[#0F296B] text-white border-[#0F296B]'
                      : dateStr === '2026-11-25'
                      ? 'bg-amber-50 border-amber-300 text-slate-900'
                      : 'bg-slate-50/70 border-slate-200/70 text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  <span>{dayNum}</span>
                  {hasEvent && (
                    <span className={`w-1.5 h-1.5 rounded-full mt-0.5 ${isSelected ? 'bg-amber-300' : 'bg-amber-500'}`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Add Reminder / Scheduled Job + Events List */}
          <div className="space-y-3 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-4 lg:pt-0 lg:pl-4">
            <form onSubmit={handleCreateCal} className="space-y-2">
              <div className="text-xs font-extrabold text-[#0F296B]">Add on {selectedDate}</div>
              <input
                type="text"
                value={calTitle}
                onChange={(e) => setCalTitle(e.target.value)}
                placeholder="Reminder or scheduled job title..."
                className="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-2 bg-white"
              />
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={calType}
                  onChange={(e) => setCalType(e.target.value)}
                  className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white"
                >
                  <option value="Reminder">Reminder</option>
                  <option value="Scheduled Job">Scheduled Job (Approval)</option>
                </select>
                <select
                  value={calTarget}
                  onChange={(e) => setCalTarget(e.target.value)}
                  className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white"
                >
                  <option value="everyone">Everyone (All Staff)</option>
                  {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                      {emp.shortName} Only
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-[#0F296B] text-white text-xs font-bold hover:bg-blue-900 transition"
              >
                Save to Calendar
              </button>
            </form>

            <div className="space-y-2 max-h-48 overflow-y-auto pt-1">
              {eventsForSelectedDate.length === 0 ? (
                <div className="text-xs text-slate-400 py-3 text-center">No items for {selectedDate}.</div>
              ) : (
                eventsForSelectedDate.map((ev) => (
                  <div key={ev.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-slate-800">{ev.title}</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 text-[10px] font-bold">
                        {ev.type}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      {ev.target === 'everyone' ? 'Visible: Everyone' : `Target: ${employees.find((e) => e.id === ev.target)?.shortName || 'Staff'}`} • {ev.approvalStatus}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MY JD & KPIs (DAILY VS MONTH-END, ACCEPT/HANDOVER, SUB-ITEMS & ESCALATION)
// ============================================================================

function MyTasksView({
  currentUser,
  employees,
  tasks,
  cardSurface,
  onAcceptTask,
  onHandoverTask,
  onAcknowledgeDinithi,
  onToggleSubItem,
  onEscalateSubItem,
  onUpdateTaskDetail
}) {
  const [scheduleFilter, setScheduleFilter] = useState('All'); // All | Daily | Month-End
  const [handoverTarget, setHandoverTarget] = useState({});
  const [handoverNote, setHandoverNote] = useState({});
  const [helpReasons, setHelpReasons] = useState({});
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [detailDraft, setDetailDraft] = useState('');
  const [minsDraft, setMinsDraft] = useState(0);

  const visibleTasks = tasks.filter((t) => {
    if (t.employeeId !== currentUser.id) return false;
    if (scheduleFilter === 'All') return true;
    return t.scheduleType === scheduleFilter;
  });

  const dinithiSlipTask = tasks.find((t) => t.id === 'task-dinithi-1');

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-extrabold text-[#0F296B]">My JD & KPIs — {currentUser.name}</h1>
          <p className="text-xs text-slate-500">
            Accept tasks, hand over to teammates, update sub-items or escalate for superior help, and submit detail updates for approval.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl p-1">
          {['All', 'Daily', 'Month-End'].map((tab) => (
            <button
              key={tab}
              onClick={() => setScheduleFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                scheduleFilter === tab ? 'bg-[#0F296B] text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab === 'Month-End' ? 'Month-End Jobs' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Shani Notification Banner for Dinithi Morning Payment Slips */}
      {currentUser.id === 'emp-shani' && dinithiSlipTask?.status !== 'Completed' && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-black text-amber-950 uppercase">
              Incoming Handover Notification — Dinithi Perera (08:30 AM - 08:50 AM)
            </div>
            <div className="text-xs text-amber-900 mt-0.5">
              Attaching Payment Slips handed over at {dinithiSlipTask?.handoverSentAt || '08:48 AM'}. Acknowledging auto-approves Dinithi’s task and starts your Daily Entries Sharing timer.
            </div>
          </div>
          <button
            onClick={onAcknowledgeDinithi}
            className="px-4 py-2 rounded-xl bg-[#0F296B] text-amber-300 font-extrabold text-xs hover:bg-blue-900 transition"
          >
            Acknowledge Payment Slips Now
          </button>
        </div>
      )}

      {/* Task Cards */}
      <div className="space-y-3">
        {visibleTasks.map((task) => {
          const isEditing = editingTaskId === task.id;
          return (
            <div key={task.id} className={`${cardSurface} rounded-2xl p-4 space-y-3`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-extrabold text-slate-900">{task.title}</span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
                      {task.scheduleType}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        task.status === 'Completed'
                          ? 'bg-emerald-100 text-emerald-800'
                          : task.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-900'
                      }`}
                    >
                      {task.status}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        task.approvalStatus === 'Approved'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : task.approvalStatus === 'Rejected / Rework'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {task.approvalStatus}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Slot: <strong>{task.timeSlot}</strong> • Allocated: {task.allocatedMinutes} min • Logged: {task.actualMinutes || 0} min
                  </div>
                  {task.detailNotes && (
                    <div className="text-xs text-slate-600 mt-1 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
                      {task.detailNotes}
                    </div>
                  )}
                  {task.rejectReason && (
                    <div className="text-xs text-rose-800 mt-1 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 font-semibold">
                      Send-Back Reason: {task.rejectReason}
                    </div>
                  )}
                </div>

                {/* Accept / Update Detail Actions */}
                <div className="flex items-center gap-2 flex-wrap">
                  {!task.acceptedByOwner && (
                    <button
                      onClick={() => onAcceptTask(task.id)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition"
                    >
                      Accept Job
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setEditingTaskId(isEditing ? null : task.id);
                      setDetailDraft(task.detailNotes || '');
                      setMinsDraft(0);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition inline-flex items-center gap-1"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Update Detail</span>
                  </button>
                </div>
              </div>

              {/* Detail Update Form (Routes for Superior Approval) */}
              {isEditing && (
                <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-200/70 space-y-2">
                  <div className="text-xs font-bold text-[#0F296B]">Update Job Details (Submits for Superior Approval)</div>
                  <textarea
                    rows={2}
                    value={detailDraft}
                    onChange={(e) => setDetailDraft(e.target.value)}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-white"
                  />
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <label className="text-xs text-slate-600 flex items-center gap-1.5">
                      <span>Add minutes spent:</span>
                      <input
                        type="number"
                        min={0}
                        value={minsDraft}
                        onChange={(e) => setMinsDraft(e.target.value)}
                        className="w-20 border border-slate-200 rounded-lg px-2 py-1 bg-white text-xs"
                      />
                    </label>
                    <button
                      onClick={() => {
                        onUpdateTaskDetail(task.id, detailDraft, minsDraft);
                        setEditingTaskId(null);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#0F296B] text-white text-xs font-bold"
                    >
                      Save for Approval
                    </button>
                  </div>
                </div>
              )}

              {/* Sub-Items One-by-One Complete or Transfer to Superior for Help */}
              {task.subItems && task.subItems.length > 0 && (
                <div className="space-y-1.5 pt-1 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Itemized Sub-Steps</div>
                  {task.subItems.map((sub) => (
                    <div
                      key={sub.id}
                      className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs"
                    >
                      <button
                        onClick={() => onToggleSubItem(task.id, sub.id)}
                        className="flex items-center gap-2 text-left flex-1 min-w-[200px]"
                      >
                        {sub.done ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                        <span className={sub.done ? 'line-through text-slate-400' : 'font-medium text-slate-800'}>
                          {sub.label}
                        </span>
                      </button>

                      {sub.needsHelp ? (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
                          Help Escalated • {getSlaAgingLabel(sub.escalatedAt) || 'Pending'}
                        </span>
                      ) : (
                        !sub.done && (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              value={helpReasons[sub.id] || ''}
                              onChange={(e) => setHelpReasons((p) => ({ ...p, [sub.id]: e.target.value }))}
                              placeholder="Need help reason..."
                              className="text-[11px] border border-slate-200 rounded-lg px-2 py-1 bg-white w-36"
                            />
                            <button
                              onClick={() =>
                                onEscalateSubItem(task.id, sub.id, helpReasons[sub.id] || 'Needs superior support')
                              }
                              className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-950 text-[11px] font-bold hover:bg-amber-200 transition"
                            >
                              Help → Superior
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Handover Job to Another Colleague */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-slate-600 inline-flex items-center gap-1">
                  <ArrowRightLeft className="w-3.5 h-3.5 text-[#0F296B]" />
                  Hand Over Job:
                </span>
                <select
                  value={handoverTarget[task.id] || ''}
                  onChange={(e) => setHandoverTarget((p) => ({ ...p, [task.id]: e.target.value }))}
                  className="border border-slate-200 rounded-lg px-2 py-1 bg-white text-xs"
                >
                  <option value="">Select teammate...</option>
                  {employees
                    .filter((e) => e.id !== currentUser.id)
                    .map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.name} ({e.shortName})
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  value={handoverNote[task.id] || ''}
                  onChange={(e) => setHandoverNote((p) => ({ ...p, [task.id]: e.target.value }))}
                  placeholder="Handover note..."
                  className="border border-slate-200 rounded-lg px-2 py-1 bg-white text-xs flex-1 min-w-[140px]"
                />
                <button
                  onClick={() => {
                    onHandoverTask(task.id, handoverTarget[task.id], handoverNote[task.id]);
                    setHandoverNote((p) => ({ ...p, [task.id]: '' }));
                  }}
                  className="px-3 py-1 rounded-lg bg-[#0F296B] text-white font-bold text-xs hover:bg-blue-900 transition"
                >
                  Transfer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// STATEMENT ALLOCATION (SAMPATH 09810004042 & SEYLAN 013012776905002)
// ============================================================================

function StatementAllocationView({ currentUser, employees, statements, setStatements, cardSurface, pushNotification }) {
  const [accountKey, setAccountKey] = useState('sampath'); // sampath | seylan
  const [searchQuery, setSearchQuery] = useState('');
  const [sideFilter, setSideFilter] = useState('All'); // All | Debit | Credit | Unallocated | Highlighted
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [bulkAssignee, setBulkAssignee] = useState('emp-dinithi');
  const [selectedIds, setSelectedIds] = useState([]);
  const [lastClickedIdx, setLastClickedIdx] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [pendingReasonInput, setPendingReasonInput] = useState({});
  const [escalationInput, setEscalationInput] = useState({});
  const fileInputRef = useRef(null);

  const activeStmt = statements[accountKey];

  const filteredEntries = useMemo(() => {
    return activeStmt.entries.filter((row) => {
      if (sideFilter === 'Debit' && row.side !== 'Debit') return false;
      if (sideFilter === 'Credit' && row.side !== 'Credit') return false;
      if (sideFilter === 'Unallocated' && row.assignedTo) return false;
      if (sideFilter === 'Highlighted' && !row.highlighted) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const hit =
          String(row.ref).toLowerCase().includes(q) ||
          String(row.description).toLowerCase().includes(q) ||
          String(row.note || '').toLowerCase().includes(q) ||
          String(row.date).toLowerCase().includes(q);
        if (!hit) return false;
      }

      if (minAmount && Number(row.amount) < Number(minAmount)) return false;
      if (maxAmount && Number(row.amount) > Number(maxAmount)) return false;
      return true;
    });
  }, [activeStmt.entries, sideFilter, searchQuery, minAmount, maxAmount]);

  const myAssignedEntries = useMemo(() => {
    return [...statements.sampath.entries, ...statements.seylan.entries].filter((e) => e.assignedTo === currentUser.id);
  }, [statements, currentUser.id]);

  const [mySelectedIds, setMySelectedIds] = useState([]);

  const updateEntriesForAccount = (accKey, updater) => {
    setStatements((prev) => ({
      ...prev,
      [accKey]: {
        ...prev[accKey],
        entries: updater(prev[accKey].entries)
      }
    }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const parsedRows = parseBankStatementWorkbook(buffer, activeStmt.accountNo);
    if (parsedRows.length > 0) {
      setStatements((prev) => ({
        ...prev,
        [accountKey]: {
          ...prev[accountKey],
          fileName: file.name,
          uploadedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          entries: parsedRows
        }
      }));
      setSelectedIds([]);
      pushNotification(
        'all',
        `Statement Uploaded: ${file.name}`,
        `Parsed ${parsedRows.length} transactions for Account ${activeStmt.accountNo}.`
      );
    }
    e.target.value = '';
  };

  const handleRowCheckbox = (idx, rowId, shiftKey) => {
    if (shiftKey && lastClickedIdx !== null) {
      const start = Math.min(lastClickedIdx, idx);
      const end = Math.max(lastClickedIdx, idx);
      const rangeIds = filteredEntries.slice(start, end + 1).map((r) => r.id);
      setSelectedIds((prev) => Array.from(new Set([...prev, ...rangeIds])));
    } else {
      setSelectedIds((prev) => (prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId]));
    }
    setLastClickedIdx(idx);
  };

  const handleAssignOne = (rowId, empId) => {
    updateEntriesForAccount(accountKey, (rows) =>
      rows.map((r) => (r.id === rowId ? { ...r, assignedTo: empId, acknowledged: false, completed: false, approved: false } : r))
    );
    if (empId) {
      pushNotification(empId, `New Statement Entry Assigned (${activeStmt.accountNo})`, 'Open Statement Allocation to acknowledge.');
    }
  };

  const handleAssignSelected = (idsToAssign, empId) => {
    if (!empId || idsToAssign.length === 0) return;
    updateEntriesForAccount(accountKey, (rows) =>
      rows.map((r) =>
        idsToAssign.includes(r.id) ? { ...r, assignedTo: empId, acknowledged: false, completed: false, approved: false } : r
      )
    );
    pushNotification(
      empId,
      `${idsToAssign.length} Statement Entries Assigned (${activeStmt.accountNo})`,
      `Assigned by ${currentUser.shortName}.`
    );
    setSelectedIds([]);
  };

  const handleApplySuggestedAssignees = () => {
    updateEntriesForAccount(accountKey, (rows) =>
      rows.map((r) => {
        if (r.assignedTo) return r;
        const suggested = getSuggestedAssignee(r.description, r.side);
        return { ...r, assignedTo: suggested };
      })
    );
  };

  const handleAssigneeBulkAction = (actionType) => {
    const targetIds = mySelectedIds.length > 0 ? mySelectedIds : myAssignedEntries.map((e) => e.id);
    if (targetIds.length === 0) return;
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const superiorId = currentUser.supervisorId || 'emp-mahasen';

    ['sampath', 'seylan'].forEach((accKey) => {
      updateEntriesForAccount(accKey, (rows) =>
        rows.map((r) => {
          if (!targetIds.includes(r.id)) return r;
          if (actionType === 'ack') return { ...r, acknowledged: true, ackAt: r.ackAt || nowTime };
          if (actionType === 'complete') return { ...r, acknowledged: true, ackAt: r.ackAt || nowTime, completed: true };
          if (actionType === 'escalate') {
            return {
              ...r,
              escalatedToSuperior: true,
              escalatedAt: Date.now(),
              escalationReason: escalationInput[r.id] || 'Transferred to superior for guidance'
            };
          }
          return r;
        })
      );
    });

    if (actionType === 'escalate') {
      pushNotification(
        superiorId,
        `Entry Escalated by ${currentUser.shortName}`,
        `${targetIds.length} statement entry/entries transferred to superior for help.`
      );
    }
    setMySelectedIds([]);
  };

  const getStatusStageBadge = (row) => {
    if (row.approved) return <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Approved</span>;
    if (row.completed) return <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">Completed</span>;
    if (row.acknowledged) return <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">Acknowledged</span>;
    return <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">Assigned</span>;
  };

  return (
    <div className="space-y-4">
      {/* Header & Account Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-extrabold text-[#0F296B]">Bank Statement Allocation</h1>
          <p className="text-xs text-slate-500">
            Sampath (09810004042) & Seylan (013012776905002) — Shift+Click range select, smart suggestions, 1-click filtered assign & bulk actions.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex bg-white border border-slate-200 rounded-xl p-1">
            <button
              onClick={() => setAccountKey('sampath')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                accountKey === 'sampath' ? 'bg-[#0F296B] text-white' : 'text-slate-600'
              }`}
            >
              Sampath • 09810004042
            </button>
            <button
              onClick={() => setAccountKey('seylan')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                accountKey === 'seylan' ? 'bg-[#0F296B] text-white' : 'text-slate-600'
              }`}
            >
              Seylan • 013012776905002
            </button>
          </div>

          <input ref={fileInputRef} type="file" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} className="hidden" />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-400 text-[#0F296B] text-xs font-extrabold hover:bg-amber-300 transition"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Statement (.xlsx/.csv)</span>
          </button>

          <button
            onClick={() => setPreviewOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Full Preview</span>
          </button>
        </div>
      </div>

      {/* Search, Amount Range, Quick Filters & Smart Assignee Toolbar */}
      <div className={`${cardSurface} rounded-2xl p-4 space-y-3`}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
          <div className="md:col-span-2 relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ref, narration keyword, note..."
              className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-white"
            />
          </div>
          <input
            type="number"
            value={minAmount}
            onChange={(e) => setMinAmount(e.target.value)}
            placeholder="Min Rs."
            className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white"
          />
          <input
            type="number"
            value={maxAmount}
            onChange={(e) => setMaxAmount(e.target.value)}
            placeholder="Max Rs."
            className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white"
          />
          <select
            value={sideFilter}
            onChange={(e) => setSideFilter(e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white font-semibold"
          >
            <option value="All">All Rows ({activeStmt.entries.length})</option>
            <option value="Debit">Debit Only</option>
            <option value="Credit">Credit Only</option>
            <option value="Unallocated">Not Allocated Only</option>
            <option value="Highlighted">Highlighted Only</option>
          </select>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={bulkAssignee}
              onChange={(e) => setBulkAssignee(e.target.value)}
              className="border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white font-semibold"
            >
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleAssignSelected(selectedIds, bulkAssignee)}
              className="px-3 py-1.5 rounded-lg bg-[#0F296B] text-white font-bold hover:bg-blue-900"
            >
              Assign Selected ({selectedIds.length})
            </button>
            <button
              onClick={() => handleAssignSelected(filteredEntries.map((r) => r.id), bulkAssignee)}
              className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#0F296B] border border-blue-200 font-bold hover:bg-blue-100"
            >
              1-Click Assign Filtered ({filteredEntries.length})
            </button>
          </div>

          <button
            onClick={handleApplySuggestedAssignees}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-950 border border-amber-200 font-bold hover:bg-amber-100"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Apply Smart Suggestions</span>
          </button>
        </div>
      </div>

      {/* Main Statement Allocation Table */}
      <div className={`${cardSurface} rounded-2xl overflow-hidden`}>
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200/70 flex items-center justify-between text-[11px] text-slate-600">
          <span>
            File: <strong>{activeStmt.fileName}</strong> • Uploaded: {activeStmt.uploadedAt}
          </span>
          <span>Tip: Hold <strong>Shift + Click</strong> on checkboxes to select a range like Excel.</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="p-2.5 w-8">
                  <input
                    type="checkbox"
                    checked={filteredEntries.length > 0 && filteredEntries.every((r) => selectedIds.includes(r.id))}
                    onChange={(e) =>
                      setSelectedIds(e.target.checked ? filteredEntries.map((r) => r.id) : [])
                    }
                  />
                </th>
                <th className="p-2.5">Date & Ref</th>
                <th className="p-2.5">Side</th>
                <th className="p-2.5 text-right">Amount (Rs.)</th>
                <th className="p-2.5">Transaction Description & Note</th>
                <th className="p-2.5">Assignee (Suggested)</th>
                <th className="p-2.5">Stage</th>
                <th className="p-2.5 text-center">Highlight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEntries.map((row, idx) => {
                const isUnallocDebit = row.side === 'Debit' && !row.assignedTo;
                const suggestedId = getSuggestedAssignee(row.description, row.side);
                const suggestedEmp = employees.find((e) => e.id === suggestedId);

                return (
                  <tr
                    key={row.id}
                    className={`${
                      row.highlighted
                        ? 'bg-amber-50/60'
                        : isUnallocDebit
                        ? 'bg-rose-50/50'
                        : 'hover:bg-slate-50/70'
                    }`}
                  >
                    <td className="p-2.5">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(row.id)}
                        onClick={(e) => handleRowCheckbox(idx, row.id, e.shiftKey)}
                        onChange={() => {}}
                      />
                    </td>
                    <td className="p-2.5 whitespace-nowrap">
                      <div className="font-bold text-slate-800">{row.date}</div>
                      <div className="text-[11px] text-slate-500">{row.ref}</div>
                    </td>
                    <td className="p-2.5 whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                          row.side === 'Debit' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {row.side}
                      </span>
                    </td>
                    <td className="p-2.5 text-right font-extrabold text-slate-900 whitespace-nowrap">
                      {Number(row.amount || 0).toLocaleString()}
                    </td>
                    <td className="p-2.5 min-w-[240px] space-y-1">
                      <div className="font-semibold text-slate-800">{row.description}</div>
                      {isUnallocDebit && (
                        <div className="text-[10px] font-bold text-rose-700 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Not Allocated Debit — Supervisor Alert</span>
                        </div>
                      )}
                      <input
                        type="text"
                        value={row.note || ''}
                        onChange={(e) =>
                          updateEntriesForAccount(accountKey, (rows) =>
                            rows.map((item) => (item.id === row.id ? { ...item, note: e.target.value } : item))
                          )
                        }
                        placeholder="Add special note..."
                        className="w-full text-[11px] border border-slate-200/80 rounded-md px-2 py-1 bg-white"
                      />
                    </td>
                    <td className="p-2.5">
                      <select
                        value={row.assignedTo || ''}
                        onChange={(e) => handleAssignOne(row.id, e.target.value)}
                        className={`text-xs border rounded-lg px-2 py-1.5 font-semibold bg-white ${
                          isUnallocDebit ? 'border-rose-300 text-rose-800' : 'border-slate-200 text-slate-800'
                        }`}
                      >
                        <option value="">-- Not Allocated --</option>
                        {employees.map((emp) => (
                          <option key={emp.id} value={emp.id}>
                            {emp.name}
                          </option>
                        ))}
                      </select>
                      {!row.assignedTo && suggestedEmp && (
                        <button
                          onClick={() => handleAssignOne(row.id, suggestedEmp.id)}
                          className="block mt-1 text-[10px] font-bold text-blue-700 hover:underline"
                        >
                          Suggest: {suggestedEmp.shortName}
                        </button>
                      )}
                    </td>
                    <td className="p-2.5 whitespace-nowrap">
                      <div className="space-y-1">
                        {getStatusStageBadge(row)}
                        {row.escalatedToSuperior && (
                          <div className="text-[10px] font-bold text-amber-800">
                            Escalated ({getSlaAgingLabel(row.escalatedAt) || 'Pending'})
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-2.5 text-center">
                      <button
                        onClick={() =>
                          updateEntriesForAccount(accountKey, (rows) =>
                            rows.map((item) => (item.id === row.id ? { ...item, highlighted: !item.highlighted } : item))
                          )
                        }
                        className={`p-1.5 rounded-lg ${row.highlighted ? 'text-amber-500 bg-amber-100/70' : 'text-slate-300 hover:text-amber-400'}`}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assignee Bulk & One-by-One Execution Queue */}
      <div className={`${cardSurface} rounded-2xl p-4 space-y-3`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-sm font-extrabold text-[#0F296B]">
              My Allocated Entries ({myAssignedEntries.length}) — {currentUser.shortName}
            </h2>
            <p className="text-xs text-slate-500">Acknowledge, mark complete, log pending reason, or transfer to superior for help.</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => handleAssigneeBulkAction('ack')}
              className="px-3 py-1.5 rounded-lg bg-amber-400 text-[#0F296B] text-xs font-extrabold"
            >
              Bulk Acknowledge
            </button>
            <button
              onClick={() => handleAssigneeBulkAction('complete')}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
            >
              Bulk Complete
            </button>
            <button
              onClick={() => handleAssigneeBulkAction('escalate')}
              className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold"
            >
              Transfer to Superior (Help)
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {myAssignedEntries.map((entry) => (
            <div
              key={entry.id}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-start gap-2.5 min-w-[240px] flex-1">
                <input
                  type="checkbox"
                  checked={mySelectedIds.includes(entry.id)}
                  onChange={(e) =>
                    setMySelectedIds((prev) =>
                      e.target.checked ? [...prev, entry.id] : prev.filter((id) => id !== entry.id)
                    )
                  }
                  className="mt-1"
                />
                <div>
                  <div className="font-bold text-slate-800">
                    {entry.side} • Rs. {Number(entry.amount || 0).toLocaleString()} ({entry.ref})
                  </div>
                  <div className="text-slate-600">{entry.description}</div>
                  {entry.escalatedToSuperior && (
                    <div className="text-[11px] font-bold text-rose-700 mt-0.5">
                      Escalated to Superior • {getSlaAgingLabel(entry.escalatedAt)} — {entry.escalationReason}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {getStatusStageBadge(entry)}
                <input
                  type="text"
                  value={pendingReasonInput[entry.id] ?? entry.pendingReason ?? ''}
                  onChange={(e) => setPendingReasonInput((p) => ({ ...p, [entry.id]: e.target.value }))}
                  placeholder="Pending reason..."
                  className="border border-slate-200 rounded-lg px-2 py-1 bg-white text-[11px] w-40"
                />
                <button
                  onClick={() => {
                    const reason = pendingReasonInput[entry.id] || '';
                    ['sampath', 'seylan'].forEach((accKey) =>
                      updateEntriesForAccount(accKey, (rows) =>
                        rows.map((r) => (r.id === entry.id ? { ...r, pendingReason: reason } : r))
                      )
                    );
                  }}
                  className="px-2 py-1 rounded-lg bg-slate-200 text-slate-800 text-[11px] font-bold"
                >
                  Save Reason
                </button>
                {!entry.acknowledged && (
                  <button
                    onClick={() => {
                      const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                      ['sampath', 'seylan'].forEach((accKey) =>
                        updateEntriesForAccount(accKey, (rows) =>
                          rows.map((r) => (r.id === entry.id ? { ...r, acknowledged: true, ackAt: nowTime } : r))
                        )
                      );
                    }}
                    className="px-2.5 py-1 rounded-lg bg-amber-400 text-[#0F296B] text-[11px] font-extrabold"
                  >
                    Acknowledge
                  </button>
                )}
                {!entry.completed && (
                  <button
                    onClick={() => {
                      const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                      ['sampath', 'seylan'].forEach((accKey) =>
                        updateEntriesForAccount(accKey, (rows) =>
                          rows.map((r) =>
                            r.id === entry.id ? { ...r, acknowledged: true, ackAt: r.ackAt || nowTime, completed: true } : r
                          )
                        )
                      );
                    }}
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-[11px] font-bold"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Statement Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col">
            <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-extrabold text-[#0F296B]">
                  Full Statement Preview — {activeStmt.bankName} ({activeStmt.accountNo})
                </h3>
                <p className="text-xs text-slate-500">{activeStmt.fileName}</p>
              </div>
              <button onClick={() => setPreviewOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-100">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 overflow-auto text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-[11px] uppercase text-slate-600">
                    <th className="p-2">Date</th>
                    <th className="p-2">Ref</th>
                    <th className="p-2">Description</th>
                    <th className="p-2">Side</th>
                    <th className="p-2 text-right">Amount</th>
                    <th className="p-2">Assigned</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {activeStmt.entries.map((r) => (
                    <tr key={r.id}>
                      <td className="p-2">{r.date}</td>
                      <td className="p-2">{r.ref}</td>
                      <td className="p-2 font-medium">{r.description}</td>
                      <td className="p-2">{r.side}</td>
                      <td className="p-2 text-right font-bold">{Number(r.amount || 0).toLocaleString()}</td>
                      <td className="p-2">{employees.find((e) => e.id === r.assignedTo)?.shortName || 'Unallocated'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 81 BANK RECONCILIATIONS (REMARKS BOX ALWAYS AVAILABLE + VARIANCE TAGS)
// ============================================================================

function ReconciliationsView({ currentUser, employees, reconciliations, setReconciliations, cardSurface }) {
  const [filterMode, setFilterMode] = useState('mine'); // mine | all | pending | completed
  const [searchText, setSearchText] = useState('');

  const list = reconciliations.filter((r) => {
    if (filterMode === 'mine' && r.ownerId !== currentUser.id) return false;
    if (filterMode === 'pending' && r.completed) return false;
    if (filterMode === 'completed' && !r.completed) return false;
    if (searchText.trim() && !r.accountName.toLowerCase().includes(searchText.toLowerCase())) return false;
    return true;
  });

  const toggleRecComplete = (id) => {
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setReconciliations((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              completed: !r.completed,
              varianceTag: !r.completed ? 'Matched' : r.varianceTag,
              updatedAt: nowTime
            }
          : r
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-extrabold text-[#0F296B]">81 Bank Reconciliations</h1>
          <p className="text-xs text-slate-500">
            Completed: {reconciliations.filter((r) => r.completed).length} / 81 • Remarks box stays editable whether pending or completed.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search account..."
            className="text-xs border border-slate-200 rounded-lg px-3 py-1.5 bg-white"
          />
          {['mine', 'all', 'pending', 'completed'].map((m) => (
            <button
              key={m}
              onClick={() => setFilterMode(m)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize ${
                filterMode === m ? 'bg-[#0F296B] text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {list.map((rec) => {
          const owner = employees.find((e) => e.id === rec.ownerId);
          return (
            <div key={rec.id} className={`${cardSurface} rounded-2xl p-4 space-y-2.5`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-extrabold text-slate-900">{rec.accountName}</div>
                  <div className="text-[11px] text-slate-500">
                    Owner: <strong>{owner?.shortName}</strong> • Updated: {rec.updatedAt}
                  </div>
                </div>
                <button
                  onClick={() => toggleRecComplete(rec.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                    rec.completed
                      ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                      : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                  }`}
                >
                  {rec.completed ? 'Completed ✓' : 'Mark Complete'}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-[11px] font-semibold text-slate-500">Variance Tag:</span>
                <select
                  value={rec.varianceTag || 'Matched'}
                  onChange={(e) =>
                    setReconciliations((prev) =>
                      prev.map((item) => (item.id === rec.id ? { ...item, varianceTag: e.target.value } : item))
                    )
                  }
                  className="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-white font-semibold"
                >
                  <option value="Matched">Matched</option>
                  <option value="Timing Difference">Timing Difference</option>
                  <option value="Missing Slip">Missing Slip</option>
                  <option value="CRO / Bank Query">CRO / Bank Query</option>
                </select>
              </div>

              {/* Persistent Remarks Box (Always available) */}
              <input
                type="text"
                value={rec.remark || ''}
                onChange={(e) =>
                  setReconciliations((prev) =>
                    prev.map((item) =>
                      item.id === rec.id
                        ? { ...item, remark: e.target.value, updatedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
                        : item
                    )
                  )
                }
                placeholder="Update reconciliation status remark..."
                className="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// MONTH-END CLOSING CHECKLIST & CUT-OFF TRACKER
// ============================================================================

function MonthEndView({ employees, monthEndItems, setMonthEndItems, cardSurface }) {
  const avgProgress = Math.round(
    monthEndItems.reduce((acc, item) => acc + Number(item.progress || 0), 0) / Math.max(1, monthEndItems.length)
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-extrabold text-[#0F296B]">Month-End Closing Checklist & Cut-Off Tracker</h1>
          <p className="text-xs text-slate-500">Track target dates, owners, dependency readiness, and completion %.</p>
        </div>
        <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-extrabold text-[#0F296B]">
          Overall Month-End Readiness: {avgProgress}%
        </div>
      </div>

      <div className="space-y-3">
        {monthEndItems.map((item) => {
          const owner = employees.find((e) => e.id === item.ownerId);
          return (
            <div key={item.id} className={`${cardSurface} rounded-2xl p-4 space-y-2.5`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-extrabold text-slate-900">{item.task}</div>
                  <div className="text-xs text-slate-500">
                    Owner: <strong>{owner?.name}</strong> • Target Date: <strong>{item.targetDate}</strong>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                    item.dependencyMet ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                  }`}
                >
                  {item.dependency}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={item.progress}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setMonthEndItems((prev) =>
                      prev.map((m) =>
                        m.id === item.id
                          ? { ...m, progress: val, status: val === 100 ? 'Completed' : 'In Progress' }
                          : m
                      )
                    );
                  }}
                  className="flex-1 accent-[#0F296B]"
                />
                <span className="text-xs font-black text-[#0F296B] w-10 text-right">{item.progress}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// HIERARCHICAL TEAM TREE & SUPERVISOR APPROVALS (WITH SEND-BACK REASON & SLA)
// ============================================================================

function ApprovalsTreeView({
  currentUser,
  employees,
  tasks,
  calendarEvents,
  setCalendarEvents,
  onApproveTask,
  onRejectTask,
  cardSurface
}) {
  const [rejectReasons, setRejectReasons] = useState({});

  const pendingTasks = tasks.filter((t) => t.approvalStatus === 'Pending Approval');
  const pendingCalJobs = calendarEvents.filter((c) => c.approvalStatus === 'Pending Approval');

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-extrabold text-[#0F296B]">Hierarchical Team Tree & Approvals</h1>
        <p className="text-xs text-slate-500">
          Reporting structure, task & scheduled-job approvals, and send-back rework loop with reason.
        </p>
      </div>

      {/* Hierarchy Tree */}
      <div className={`${cardSurface} rounded-2xl p-4`}>
        <h2 className="text-xs font-extrabold uppercase text-slate-500 mb-3">Finance Reporting Hierarchy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {employees.map((emp) => {
            const sup = employees.find((s) => s.id === emp.supervisorId);
            return (
              <div key={emp.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0F296B] text-amber-300 font-bold flex items-center justify-center shrink-0">
                    {emp.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-slate-900 truncate">{emp.shortName}</div>
                    <div className="text-[10px] text-slate-500 truncate">{emp.grade}</div>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 mt-2">
                  Reports to: <strong>{sup ? sup.shortName : 'Executive Board'}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pending Task Approvals */}
      <div className={`${cardSurface} rounded-2xl p-4 space-y-3`}>
        <h2 className="text-sm font-extrabold text-[#0F296B]">Pending Task Approvals ({pendingTasks.length})</h2>
        {pendingTasks.length === 0 ? (
          <div className="text-xs text-slate-400 py-3">All submitted tasks have been reviewed.</div>
        ) : (
          pendingTasks.map((t) => {
            const owner = employees.find((e) => e.id === t.employeeId);
            return (
              <div key={t.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-slate-900">
                    {t.title} — <span className="text-[#0F296B]">{owner?.name}</span>
                  </div>
                  <div className="text-slate-600 mt-0.5">{t.detailNotes}</div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => onApproveTask(t.id)}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold"
                  >
                    Approve
                  </button>
                  <input
                    type="text"
                    value={rejectReasons[t.id] || ''}
                    onChange={(e) => setRejectReasons((p) => ({ ...p, [t.id]: e.target.value }))}
                    placeholder="Reason to send back..."
                    className="border border-slate-200 rounded-lg px-2 py-1 bg-white w-40"
                  />
                  <button
                    onClick={() => onRejectTask(t.id, rejectReasons[t.id] || 'Please revise and resubmit.')}
                    className="px-3 py-1.5 rounded-lg bg-rose-600 text-white font-bold"
                  >
                    Send Back
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pending Scheduled Calendar Jobs */}
      {pendingCalJobs.length > 0 && (
        <div className={`${cardSurface} rounded-2xl p-4 space-y-2`}>
          <h2 className="text-sm font-extrabold text-[#0F296B]">Pending Scheduled Calendar Jobs ({pendingCalJobs.length})</h2>
          {pendingCalJobs.map((ev) => (
            <div key={ev.id} className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 flex items-center justify-between text-xs">
              <div>
                <strong>{ev.title}</strong> ({ev.date})
              </div>
              <button
                onClick={() =>
                  setCalendarEvents((prev) =>
                    prev.map((c) => (c.id === ev.id ? { ...c, approvalStatus: 'Approved' } : c))
                  )
                }
                className="px-3 py-1 rounded-lg bg-[#0F296B] text-white font-bold"
              >
                Approve Job
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// OUR PLEDGE (8 PRINCIPLES — SELECTIVE STARS OR DEDUCTION MARKS)
// ============================================================================

function OurPledgeView({ currentUser, employees, pledgeRatings, setPledgeRatings, cardSurface }) {
  const [targetId, setTargetId] = useState(employees[1]?.id || 'emp-mahasen');
  const [scoresByPrinciple, setScoresByPrinciple] = useState({});
  const [comment, setComment] = useState('');

  const handleSetScore = (pId, val) => {
    setScoresByPrinciple((prev) => {
      if (prev[pId] === val) {
        const next = { ...prev };
        delete next[pId];
        return next;
      }
      return { ...prev, [pId]: val };
    });
  };

  const handleSubmitPledge = (e) => {
    e.preventDefault();
    const entries = Object.entries(scoresByPrinciple);
    if (entries.length === 0) return;

    const newRecords = entries.map(([pId, sc]) => ({
      id: `pr-${Date.now()}-${pId}-${Math.random().toString(36).slice(2, 5)}`,
      raterId: currentUser.id,
      targetId,
      principleId: Number(pId),
      score: Number(sc),
      comment: comment.trim()
    }));

    setPledgeRatings((prev) => [...newRecords, ...prev]);
    setScoresByPrinciple({});
    setComment('');
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-extrabold text-[#0F296B]">Our Pledge — 8 Guiding Principles</h1>
        <p className="text-xs text-slate-500">
          Starts unselected. Score only the principles you choose (1–5★) or apply negative deduction marks (-1, -2, -3).
        </p>
      </div>

      <form onSubmit={handleSubmitPledge} className={`${cardSurface} rounded-2xl p-4 space-y-3`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-700">Evaluate Colleague:</span>
            <select
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              className="border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white font-semibold"
            >
              {employees
                .filter((e) => e.id !== currentUser.id)
                .map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
            </select>
          </div>
          <button type="submit" className="px-4 py-1.5 rounded-xl bg-[#0F296B] text-amber-300 text-xs font-extrabold">
            Submit Pledge Score
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {PLEDGE_PRINCIPLES.map((p) => {
            const currentVal = scoresByPrinciple[p.id];
            return (
              <div key={p.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div>
                  <div className="text-xs font-extrabold text-slate-900">
                    {p.id}. {p.title}
                  </div>
                  <div className="text-[11px] text-slate-500">{p.desc}</div>
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => handleSetScore(p.id, s)}
                      className={`px-2 py-1 rounded-md text-[11px] font-bold ${
                        currentVal === s ? 'bg-amber-400 text-[#0F296B]' : 'bg-white border border-slate-200 text-slate-600'
                      }`}
                    >
                      {s}★
                    </button>
                  ))}
                  {[-1, -2, -3].map((neg) => (
                    <button
                      type="button"
                      key={neg}
                      onClick={() => handleSetScore(p.id, neg)}
                      className={`px-2 py-1 rounded-md text-[11px] font-bold ${
                        currentVal === neg ? 'bg-rose-600 text-white' : 'bg-white border border-rose-200 text-rose-700'
                      }`}
                    >
                      {neg}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Optional note or reason..."
          className="w-full text-xs border border-slate-200 rounded-lg px-3 py-2 bg-white"
        />
      </form>

      <div className={`${cardSurface} rounded-2xl p-4 space-y-2`}>
        <h2 className="text-xs font-extrabold uppercase text-slate-500">Recent Pledge Evaluations</h2>
        {pledgeRatings.slice(0, 8).map((r) => {
          const target = employees.find((e) => e.id === r.targetId);
          const rater = employees.find((e) => e.id === r.raterId);
          const pr = PLEDGE_PRINCIPLES.find((p) => p.id === r.principleId);
          return (
            <div key={r.id} className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-between text-xs">
              <div>
                <strong>{target?.shortName}</strong> • <span className="text-slate-600">{pr?.title}</span>
                {r.comment && <div className="text-[11px] text-slate-500">“{r.comment}” by {rater?.shortName}</div>}
              </div>
              <span className={`font-black ${r.score < 0 ? 'text-rose-600' : 'text-amber-600'}`}>
                {r.score > 0 ? `+${r.score}★` : `${r.score} pts`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// SEPARATE NEW IDEA HUB & FEEDBACK BOX (WITH CUSTOM CATEGORIES)
// ============================================================================

function IdeaHubView({ currentUser, employees, ideas, setIdeas, cardSurface }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Bank & Entries Automation');
  const [customCat, setCustomCat] = useState('');
  const [desc, setDesc] = useState('');

  const finalCat = category === 'Other / Custom' && customCat.trim() ? customCat.trim() : category;

  const addIdea = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setIdeas((prev) => [
      {
        id: `idea-${Date.now()}`,
        title: title.trim(),
        category: finalCat,
        authorId: currentUser.id,
        desc: desc.trim(),
        votes: 1
      },
      ...prev
    ]);
    setTitle('');
    setCustomCat('');
    setDesc('');
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-extrabold text-[#0F296B]">FLi Pinnacle New Idea Hub</h1>
        <p className="text-xs text-slate-500">Share process improvements and custom category ideas for the finance team.</p>
      </div>

      <form onSubmit={addIdea} className={`${cardSurface} rounded-2xl p-4 space-y-2.5`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Idea title..."
            className="md:col-span-2 text-xs border border-slate-200 rounded-lg px-3 py-2 bg-white"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-2.5 py-2 bg-white font-semibold"
          >
            <option value="Bank & Entries Automation">Bank & Entries Automation</option>
            <option value="Month-End & Audit">Month-End & Audit</option>
            <option value="Team Productivity">Team Productivity</option>
            <option value="Other / Custom">Other / Custom</option>
          </select>
        </div>
        {category === 'Other / Custom' && (
          <input
            type="text"
            value={customCat}
            onChange={(e) => setCustomCat(e.target.value)}
            placeholder="Enter custom idea category..."
            className="w-full text-xs border border-amber-300 rounded-lg px-3 py-1.5 bg-amber-50/40"
          />
        )}
        <textarea
          rows={2}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="How does this help daily work?"
          className="w-full text-xs border border-slate-200 rounded-lg p-2.5 bg-white"
        />
        <button type="submit" className="px-4 py-2 rounded-xl bg-[#0F296B] text-amber-300 text-xs font-extrabold">
          Publish Idea
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {ideas.map((item) => (
          <div key={item.id} className={`${cardSurface} rounded-2xl p-4 flex flex-col justify-between gap-3`}>
            <div>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#0F296B] text-[10px] font-bold">
                {item.category}
              </span>
              <div className="text-sm font-extrabold text-slate-900 mt-1.5">{item.title}</div>
              <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
            </div>
            <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
              <span className="text-slate-500">By {employees.find((e) => e.id === item.authorId)?.shortName}</span>
              <button
                onClick={() =>
                  setIdeas((prev) => prev.map((x) => (x.id === item.id ? { ...x, votes: x.votes + 1 } : x)))
                }
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-950 font-bold"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{item.votes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeedbackBoxView({ currentUser, employees, feedbacks, setFeedbacks, cardSurface }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Workflow & Timings');
  const [customCat, setCustomCat] = useState('');
  const [desc, setDesc] = useState('');

  const finalCat = category === 'Other / Custom' && customCat.trim() ? customCat.trim() : category;

  const submitFeedback = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setFeedbacks((prev) => [
      {
        id: `fb-${Date.now()}`,
        title: title.trim(),
        category: finalCat,
        authorId: currentUser.id,
        desc: desc.trim(),
        status: 'Submitted'
      },
      ...prev
    ]);
    setTitle('');
    setCustomCat('');
    setDesc('');
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-extrabold text-[#0F296B]">Feedback Box</h1>
        <p className="text-xs text-slate-500">Dedicated feedback channel with custom categories.</p>
      </div>

      <form onSubmit={submitFeedback} className={`${cardSurface} rounded-2xl p-4 space-y-2.5`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Feedback subject..."
            className="md:col-span-2 text-xs border border-slate-200 rounded-lg px-3 py-2 bg-white"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-2.5 py-2 bg-white font-semibold"
          >
            <option value="Workflow & Timings">Workflow & Timings</option>
            <option value="Tools & Access">Tools & Access</option>
            <option value="Other / Custom">Other / Custom</option>
          </select>
        </div>
        {category === 'Other / Custom' && (
          <input
            type="text"
            value={customCat}
            onChange={(e) => setCustomCat(e.target.value)}
            placeholder="Enter custom feedback category..."
            className="w-full text-xs border border-amber-300 rounded-lg px-3 py-1.5 bg-amber-50/40"
          />
        )}
        <textarea
          rows={2}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Your feedback details..."
          className="w-full text-xs border border-slate-200 rounded-lg p-2.5 bg-white"
        />
        <button type="submit" className="px-4 py-2 rounded-xl bg-[#0F296B] text-white text-xs font-bold">
          Submit Feedback
        </button>
      </form>

      <div className="space-y-2.5">
        {feedbacks.map((fb) => (
          <div key={fb.id} className={`${cardSurface} rounded-2xl p-4 text-xs`}>
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-900 text-sm">{fb.title}</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold">{fb.category}</span>
            </div>
            <p className="text-slate-600 mt-1">{fb.desc}</p>
            <div className="text-[11px] text-slate-400 mt-1.5">
              By {employees.find((e) => e.id === fb.authorId)?.shortName} • {fb.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// WI-FI LAN FILE DROP (POPOVER + FULL VIEW WITH OTHER/CUSTOM & VISIBILITY)
// ============================================================================

function LanQuickDropPopover({ employees, currentUser, lanFiles, onAddFile, onClose, onOpenFull }) {
  const [fileName, setFileName] = useState('');
  const [category, setCategory] = useState('Bank Statements');
  const [customCat, setCustomCat] = useState('');
  const [visibility, setVisibility] = useState('everyone'); // everyone | selected
  const [targetId, setTargetId] = useState(employees[1]?.id || 'emp-mahasen');

  const handleDropSubmit = (e) => {
    e.preventDefault();
    if (!fileName.trim()) return;
    onAddFile({
      id: `lan-${Date.now()}`,
      name: fileName.trim(),
      category: category === 'Other / Custom' && customCat.trim() ? customCat.trim() : category,
      visibility,
      targetId: visibility === 'selected' ? targetId : null,
      uploadedBy: currentUser.id,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      size: '84 KB'
    });
    setFileName('');
    setCustomCat('');
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-3.5 z-40 space-y-2.5 text-xs">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <span className="font-extrabold text-[#0F296B]">Office Wi-Fi Speed File Drop</span>
        <button onClick={onClose}>
          <X className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      <form onSubmit={handleDropSubmit} className="space-y-2">
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="File name (e.g. Voucher_Batch.xlsx)..."
          className="w-full border border-slate-200 rounded-lg px-2.5 py-1.5"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold"
        >
          <option value="Bank Statements">Bank Statements</option>
          <option value="Vouchers & Slips">Vouchers & Slips</option>
          <option value="Other / Custom">Other / Custom</option>
        </select>
        {category === 'Other / Custom' && (
          <input
            type="text"
            value={customCat}
            onChange={(e) => setCustomCat(e.target.value)}
            placeholder="Custom category..."
            className="w-full border border-amber-300 rounded-lg px-2.5 py-1.5 bg-amber-50/40"
          />
        )}
        <div className="grid grid-cols-2 gap-1.5">
          <select
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
            className="border border-slate-200 rounded-lg px-2 py-1.5 font-semibold"
          >
            <option value="everyone">Visible: Everyone</option>
            <option value="selected">Selected Person Only</option>
          </select>
          {visibility === 'selected' && (
            <select
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              className="border border-slate-200 rounded-lg px-2 py-1.5"
            >
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.shortName}
                </option>
              ))}
            </select>
          )}
        </div>
        <button type="submit" className="w-full py-1.5 rounded-lg bg-[#0F296B] text-white font-bold">
          Drop File
        </button>
      </form>

      <div className="space-y-1 max-h-28 overflow-y-auto pt-1 border-t border-slate-100">
        {lanFiles
          .filter((f) => f.visibility === 'everyone' || f.targetId === currentUser.id || f.uploadedBy === currentUser.id)
          .slice(0, 4)
          .map((f) => (
            <div key={f.id} className="flex items-center justify-between text-[11px] py-1">
              <span className="font-semibold text-slate-700 truncate">{f.name}</span>
              <span className="text-[10px] text-slate-400">{f.category}</span>
            </div>
          ))}
      </div>

      <button onClick={onOpenFull} className="w-full text-center text-[11px] font-bold text-blue-700 hover:underline">
        Open Full LAN File Share →
      </button>
    </div>
  );
}

function LanFilesView({ currentUser, employees, lanFiles, onAddFile, cardSurface }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Bank Statements');
  const [customCat, setCustomCat] = useState('');
  const [visibility, setVisibility] = useState('everyone');
  const [targetId, setTargetId] = useState(employees[1]?.id || 'emp-mahasen');

  const visibleFiles = lanFiles.filter(
    (f) => f.visibility === 'everyone' || f.targetId === currentUser.id || f.uploadedBy === currentUser.id
  );

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddFile({
      id: `lan-${Date.now()}`,
      name: name.trim(),
      category: category === 'Other / Custom' && customCat.trim() ? customCat.trim() : category,
      visibility,
      targetId: visibility === 'selected' ? targetId : null,
      uploadedBy: currentUser.id,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      size: '112 KB'
    });
    setName('');
    setCustomCat('');
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-extrabold text-[#0F296B]">Office Wi-Fi Speed File Drop</h1>
        <p className="text-xs text-slate-500">Share files with everyone or a selected person, with custom categories.</p>
      </div>

      <form onSubmit={handleAdd} className={`${cardSurface} rounded-2xl p-4 grid grid-cols-1 md:grid-cols-5 gap-2.5 text-xs`}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Document or spreadsheet name..."
          className="md:col-span-2 border border-slate-200 rounded-lg px-3 py-2 bg-white"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-slate-200 rounded-lg px-2.5 py-2 bg-white font-semibold"
        >
          <option value="Bank Statements">Bank Statements</option>
          <option value="Vouchers & Slips">Vouchers & Slips</option>
          <option value="Other / Custom">Other / Custom</option>
        </select>
        <select
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
          className="border border-slate-200 rounded-lg px-2.5 py-2 bg-white font-semibold"
        >
          <option value="everyone">Visible: Everyone</option>
          <option value="selected">Selected Person Only</option>
        </select>
        <button type="submit" className="rounded-lg bg-[#0F296B] text-amber-300 font-extrabold py-2">
          Share File
        </button>

        {category === 'Other / Custom' && (
          <input
            type="text"
            value={customCat}
            onChange={(e) => setCustomCat(e.target.value)}
            placeholder="Custom category name..."
            className="md:col-span-2 border border-amber-300 rounded-lg px-3 py-1.5 bg-amber-50/40"
          />
        )}
        {visibility === 'selected' && (
          <select
            value={targetId}
            onChange={(e) => setTargetId(e.target.value)}
            className="md:col-span-2 border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white"
          >
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                Recipient: {emp.name}
              </option>
            ))}
          </select>
        )}
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {visibleFiles.map((f) => (
          <div key={f.id} className={`${cardSurface} rounded-2xl p-4 flex items-center justify-between text-xs`}>
            <div>
              <div className="font-extrabold text-slate-900">{f.name}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {f.category} • By {employees.find((e) => e.id === f.uploadedBy)?.shortName} • {f.time}
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0F296B] font-bold">
              {f.visibility === 'everyone'
                ? 'Everyone'
                : `Only ${employees.find((e) => e.id === f.targetId)?.shortName || 'Selected'}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// REPORTS & ANALYTICS + PRINTABLE/PDF DAY-END HANDOVER EXPORT + CSV DOWNLOAD
// ============================================================================

function ReportsAnalyticsView({ currentUser, employees, dutyInMap, tasks, statements, reconciliations, cardSurface }) {
  const [selectedEmpId, setSelectedEmpId] = useState(currentUser.id);
  const [periodFrom, setPeriodFrom] = useState('2026-11-01');
  const [periodTo, setPeriodTo] = useState('2026-11-25');

  const targetEmp = employees.find((e) => e.id === selectedEmpId) || currentUser;

  const downloadCsvSummary = () => {
    const headers = ['Employee', 'Role', 'Duty In', 'Total Tasks', 'Completed Tasks', 'Logged Minutes', 'Reconciliations Done'];
    const rows = employees.map((emp) => {
      const empTasks = tasks.filter((t) => t.employeeId === emp.id);
      const recsDone = reconciliations.filter((r) => r.ownerId === emp.id && r.completed).length;
      const mins = empTasks.reduce((a, b) => a + (b.actualMinutes || 0), 0);
      return [
        emp.name,
        emp.role,
        dutyInMap[emp.id] || '08:30 AM',
        empTasks.length,
        empTasks.filter((t) => t.status === 'Completed').length,
        mins,
        recsDone
      ];
    });

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers, ...rows].map((e) => e.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `FLi_Pinnacle_Report_${periodFrom}_to_${periodTo}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-extrabold text-[#0F296B]">Reports & Analytics</h1>
          <p className="text-xs text-slate-500">
            Date-period filters, CSV exports, and standardized Day-End PDF handover reports per employee.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="date"
            value={periodFrom}
            onChange={(e) => setPeriodFrom(e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white"
          />
          <input
            type="date"
            value={periodTo}
            onChange={(e) => setPeriodTo(e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white"
          />
          <button
            onClick={downloadCsvSummary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CSV</span>
          </button>
        </div>
      </div>

      {/* Standardized Day-End Handover & Activity PDF Generator */}
      <div className={`${cardSurface} rounded-2xl p-5 space-y-3`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-extrabold text-[#0F296B]">Employee Day-End Handover & Activity PDF</h2>
            <p className="text-xs text-slate-500">
              Includes Duty In, completed/pending tasks with reasons, handled/escalated entries, and reconciliations.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={selectedEmpId}
              onChange={(e) => setSelectedEmpId(e.target.value)}
              className="text-xs border border-slate-200 rounded-lg px-3 py-2 bg-white font-semibold"
            >
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name}
                </option>
              ))}
            </select>
            <button
              onClick={() =>
                exportDayEndReportPdf(targetEmp, dutyInMap[targetEmp.id], tasks, statements, reconciliations, employees)
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F296B] text-amber-300 text-xs font-extrabold hover:bg-blue-900"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Generate Day-End PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Department Summary Table */}
      <div className={`${cardSurface} rounded-2xl overflow-hidden`}>
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[11px] uppercase text-slate-500">
              <th className="p-3">Staff Member</th>
              <th className="p-3">Duty In</th>
              <th className="p-3">Tasks Done</th>
              <th className="p-3">Time Logged</th>
              <th className="p-3">Reconciliations Done</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {employees.map((emp) => {
              const empTasks = tasks.filter((t) => t.employeeId === emp.id);
              const doneTasks = empTasks.filter((t) => t.status === 'Completed').length;
              const mins = empTasks.reduce((a, b) => a + (b.actualMinutes || 0), 0);
              const recsDone = reconciliations.filter((r) => r.ownerId === emp.id && r.completed).length;
              return (
                <tr key={emp.id}>
                  <td className="p-3 font-bold text-slate-900">
                    {emp.name} <span className="text-slate-400 font-normal">({emp.grade})</span>
                  </td>
                  <td className="p-3">{dutyInMap[emp.id] || '08:30 AM'}</td>
                  <td className="p-3">
                    {doneTasks} / {empTasks.length}
                  </td>
                  <td className="p-3">{mins} mins</td>
                  <td className="p-3">{recsDone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// SIMPLE, CLEAN BREAK-TIME MINI-GAMES
// ============================================================================

function BreakTimeGamesView({ cardSurface }) {
  const [gameTab, setGameTab] = useState('reflex'); // reflex | math
  const [score, setScore] = useState(0);
  const [activeTile, setActiveTile] = useState(2);
  const [mathA, setMathA] = useState(24);
  const [mathB, setMathB] = useState(18);
  const [mathAnswer, setMathAnswer] = useState('');
  const [mathFeedback, setMathFeedback] = useState('');

  const handleTileHit = (idx) => {
    if (idx === activeTile) {
      setScore((s) => s + 10);
      setActiveTile((prev) => (prev + 3) % 9);
    }
  };

  const handleCheckMath = (e) => {
    e.preventDefault();
    if (Number(mathAnswer) === mathA + mathB) {
      setScore((s) => s + 15);
      setMathFeedback('Correct! +15 pts');
      const nextA = Math.floor(Math.random() * 50) + 10;
      const nextB = Math.floor(Math.random() * 50) + 10;
      setMathA(nextA);
      setMathB(nextB);
      setMathAnswer('');
    } else {
      setMathFeedback(`Try again (${mathA} + ${mathB})`);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-lg font-extrabold text-[#0F296B]">Break-Time Mini-Games</h1>
          <p className="text-xs text-slate-500">Quick, calm refreshers during scheduled breaks.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-950 text-xs font-extrabold">
            Score: {score} pts
          </span>
          <button
            onClick={() => setGameTab('reflex')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
              gameTab === 'reflex' ? 'bg-[#0F296B] text-white' : 'bg-white border border-slate-200'
            }`}
          >
            Quick Tile Tap
          </button>
          <button
            onClick={() => setGameTab('math')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
              gameTab === 'math' ? 'bg-[#0F296B] text-white' : 'bg-white border border-slate-200'
            }`}
          >
            Mental Math Sprint
          </button>
        </div>
      </div>

      {gameTab === 'reflex' ? (
        <div className={`${cardSurface} rounded-2xl p-6 max-w-md mx-auto text-center space-y-4`}>
          <div className="text-xs font-bold text-slate-600">Tap the highlighted gold tile to score</div>
          <div className="grid grid-cols-3 gap-2.5">
            {Array.from({ length: 9 }, (_, i) => (
              <button
                key={i}
                onClick={() => handleTileHit(i)}
                className={`h-20 rounded-xl font-extrabold text-xs transition ${
                  i === activeTile ? 'bg-amber-400 text-[#0F296B] shadow-sm' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                }`}
              >
                {i === activeTile ? 'TAP!' : ''}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className={`${cardSurface} rounded-2xl p-6 max-w-md mx-auto text-center space-y-4`}>
          <div className="text-2xl font-black text-[#0F296B]">
            {mathA} + {mathB} = ?
          </div>
          <form onSubmit={handleCheckMath} className="flex items-center justify-center gap-2">
            <input
              type="number"
              value={mathAnswer}
              onChange={(e) => setMathAnswer(e.target.value)}
              placeholder="Answer"
              className="w-28 border border-slate-200 rounded-xl px-3 py-2 text-center font-bold text-sm"
            />
            <button type="submit" className="px-4 py-2 rounded-xl bg-[#0F296B] text-white text-xs font-bold">
              Check
            </button>
          </form>
          {mathFeedback && <div className="text-xs font-bold text-emerald-700">{mathFeedback}</div>}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// PROFILE & HEALTH STATUS (HYDRATION CALCULATOR + WELLNESS DETAILS)
// ============================================================================

function ProfileHealthView({ currentUser, dutyInMap, dailyWaterTargetMl, dailyWaterGlassesTarget, cardSurface, onUpdateProfile }) {
  const [editMode, setEditMode] = useState(false);
  const [heightCm, setHeightCm] = useState(currentUser.heightCm || 170);
  const [weightKg, setWeightKg] = useState(currentUser.weightKg || 65);
  const [bloodGroup, setBloodGroup] = useState(currentUser.bloodGroup || 'O+');
  const [healthNotes, setHealthNotes] = useState(currentUser.healthNotes || '');

  useEffect(() => {
    setHeightCm(currentUser.heightCm || 170);
    setWeightKg(currentUser.weightKg || 65);
    setBloodGroup(currentUser.bloodGroup || 'O+');
    setHealthNotes(currentUser.healthNotes || '');
    setEditMode(false);
  }, [currentUser]);

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProfile({
      heightCm: Number(heightCm) || 170,
      weightKg: Number(weightKg) || 65,
      bloodGroup,
      healthNotes
    });
    setEditMode(false);
  };

  return (
    <div className="space-y-4 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-extrabold text-[#0F296B]">My Profile & Health Status</h1>
          <p className="text-xs text-slate-500">View profile details or switch to Edit Mode to update health & hydration targets.</p>
        </div>
        <button
          onClick={() => setEditMode((v) => !v)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0F296B] text-white text-xs font-bold"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>{editMode ? 'Cancel Edit' : 'Edit Profile & Health'}</span>
        </button>
      </div>

      <div className={`${cardSurface} rounded-2xl p-5 space-y-4`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#0F296B] text-amber-300 font-black text-lg flex items-center justify-center">
            {currentUser.avatar}
          </div>
          <div>
            <div className="text-base font-extrabold text-slate-900">{currentUser.name}</div>
            <div className="text-xs text-slate-500">{currentUser.role} • Duty In: {dutyInMap[currentUser.id] || '08:30 AM'}</div>
            <div className="text-xs text-slate-600 mt-1">
              Daily Water Target: <strong>{dailyWaterTargetMl} ml</strong> (~{dailyWaterGlassesTarget} glasses of 250 ml)
            </div>
          </div>
        </div>

        {!editMode ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-100 text-xs">
            <div className="p-3 rounded-xl bg-slate-50">
              <div className="text-slate-400 text-[10px] uppercase font-bold">Height</div>
              <div className="font-extrabold text-slate-800 mt-0.5">{currentUser.heightCm} cm</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50">
              <div className="text-slate-400 text-[10px] uppercase font-bold">Weight</div>
              <div className="font-extrabold text-slate-800 mt-0.5">{currentUser.weightKg} kg</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50">
              <div className="text-slate-400 text-[10px] uppercase font-bold">Blood Group</div>
              <div className="font-extrabold text-slate-800 mt-0.5">{currentUser.bloodGroup}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50">
              <div className="text-slate-400 text-[10px] uppercase font-bold">Water Today</div>
              <div className="font-extrabold text-slate-800 mt-0.5">{currentUser.waterGlassesToday || 0} glasses</div>
            </div>
            <div className="col-span-2 sm:col-span-4 p-3 rounded-xl bg-slate-50">
              <div className="text-slate-400 text-[10px] uppercase font-bold">Health & Wellness Note</div>
              <div className="text-slate-700 mt-0.5">{currentUser.healthNotes || 'None'}</div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-3 pt-2 border-t border-slate-100 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-bold text-slate-600 mb-1">Height (cm)</label>
                <input
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 bg-white"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-600 mb-1">Weight (kg)</label>
                <input
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 bg-white"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-600 mb-1">Blood Group</label>
                <input
                  type="text"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block font-bold text-slate-600 mb-1">Wellness / Break Note</label>
              <input
                type="text"
                value={healthNotes}
                onChange={(e) => setHealthNotes(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 bg-white"
              />
            </div>
            <button type="submit" className="px-4 py-2 rounded-xl bg-[#0F296B] text-amber-300 font-extrabold">
              Save Profile & Recalculate Hydration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// INSTANT CHAT (GROUP CHANNEL + 1-ON-1 DIRECT MESSAGES)
// ============================================================================

function InstantChatBox({ currentUser, employees, messages, onSend, onClose }) {
  const [mode, setMode] = useState('group'); // group | dm
  const [dmTargetId, setDmTargetId] = useState('emp-shani');
  const [draft, setDraft] = useState('');

  const filteredMsgs = messages.filter((m) => {
    if (mode === 'group') return m.channelType === 'group';
    return (
      m.channelType === 'dm' &&
      ((m.senderId === currentUser.id && m.channelId === dmTargetId) ||
        (m.senderId === dmTargetId && m.channelId === currentUser.id))
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    onSend({
      id: `msg-${Date.now()}`,
      channelType: mode,
      channelId: mode === 'group' ? 'finance-all' : dmTargetId,
      senderId: currentUser.id,
      text: draft.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    setDraft('');
  };

  return (
    <div className="w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-xs">
      <div className="bg-[#0F296B] text-white px-3.5 py-2.5 flex items-center justify-between">
        <span className="font-extrabold">FLi Team Chat</span>
        <button onClick={onClose}>
          <X className="w-4 h-4 text-blue-200 hover:text-white" />
        </button>
      </div>

      <div className="p-2 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5">
        <button
          onClick={() => setMode('group')}
          className={`flex-1 py-1 rounded-lg font-bold ${
            mode === 'group' ? 'bg-[#0F296B] text-white' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          Group
        </button>
        <button
          onClick={() => setMode('dm')}
          className={`flex-1 py-1 rounded-lg font-bold ${
            mode === 'dm' ? 'bg-[#0F296B] text-white' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          1-on-1 DM
        </button>
      </div>

      {mode === 'dm' && (
        <div className="px-2 py-1.5 border-b border-slate-100 bg-white">
          <select
            value={dmTargetId}
            onChange={(e) => setDmTargetId(e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold"
          >
            {employees
              .filter((e) => e.id !== currentUser.id)
              .map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name}
                </option>
              ))}
          </select>
        </div>
      )}

      <div className="p-3 space-y-2 h-56 overflow-y-auto bg-slate-50/40">
        {filteredMsgs.map((m) => {
          const sender = employees.find((e) => e.id === m.senderId);
          const mine = m.senderId === currentUser.id;
          return (
            <div key={m.id} className={`flex flex-col ${mine ? 'items-end' : 'items-start'}`}>
              <span className="text-[10px] text-slate-400 mb-0.5">
                {sender?.shortName} • {m.time}
              </span>
              <div
                className={`px-3 py-1.5 rounded-xl max-w-[220px] ${
                  mine ? 'bg-[#0F296B] text-white' : 'bg-white border border-slate-200 text-slate-800'
                }`}
              >
                {m.text}
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="p-2 border-t border-slate-200 flex items-center gap-1.5 bg-white">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type message..."
          className="flex-1 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs"
        />
        <button type="submit" className="p-2 rounded-lg bg-[#0F296B] text-amber-300">
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
