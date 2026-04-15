import { useState, useEffect } from "react";
import { getSubmissions } from "@/lib/supabaseClient";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Search, Users, Calendar, ArrowLeft, Lock, LogOut } from "lucide-react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AUTH_KEY = "isAdmin";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem(AUTH_KEY);
    if (authStatus !== "true") {
      toast.error("Unauthorized Access");
      navigate("/");
    } else {
      fetchLeads();
    }
  }, [navigate]);

  const fetchLeads = async () => {
    setLoading(true);
    console.log("Fetching Leads...");
    try {
      const data = await getSubmissions();
      console.log("Fetched:", data);
      setLeads(data || []);
    } catch (err) {
      console.error("Fetch Error:", err);
      toast.error("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    toast.info("Logged Out");
    navigate("/");
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Product", "Message", "Date"];
    const csvContent = [
      headers.join(","),
      ...filteredLeads.map((l) =>
        [
          `"${l.name}"`,
          `"${l.email}"`,
          `"${l.phone || ""}"`,
          `"${l.company || ""}"`,
          `"${l.product || l.productInterest || ""}"`,
          `"${l.message.replace(/"/g, '""')}"`,
          `"${format(new Date(l.created_at || l.timestamp), "yyyy-MM-dd HH:mm")}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `dharma_steel_leads_${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
             <a href="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-2 text-sm font-bold">
               <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO SITE
             </a>
             <h1 className="text-4xl font-black tracking-tighter text-foreground uppercase">
               Lead <span className="text-primary">Dashboard</span>
             </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={exportToCSV} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-none">
              <Download className="mr-2 h-4 w-4" /> EXPORT CSV
            </Button>
            <Button variant="outline" onClick={handleLogout} className="border-border/50 text-muted-foreground hover:text-destructive hover:bg-destructive/5 font-bold rounded-none">
              <LogOut className="mr-2 h-4 w-4" /> LOGOUT
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {leads.length === 0 && !loading ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 bg-card border border-border/50"
            >
              <Users className="w-16 h-16 text-muted-foreground/20 mb-4" />
              <h2 className="text-2xl font-black uppercase tracking-tight mb-2">No Leads Yet</h2>
              <p className="text-muted-foreground text-sm uppercase font-bold tracking-widest">Awaiting customer interest submissions.</p>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="bg-card border-border/50 rounded-none">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Leads</CardTitle>
                    <Users className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-black">{leads.length}</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border/50 rounded-none">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Search</CardTitle>
                    <Search className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-black">{filteredLeads.length}</div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/50 rounded-none">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Last Sync</CardTitle>
                    <Calendar className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-black text-sm uppercase">JUST NOW</div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-card border border-border/50 rounded-none overflow-hidden">
                <div className="p-6 border-b border-border/50 flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name or email..."
                      className="pl-10 bg-background border-border/50 rounded-none"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest hidden md:block">
                    Proprietary Lead Management System v1.0
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted">
                      <TableRow className="border-border/50">
                        <TableHead className="font-bold text-foreground">NAME</TableHead>
                        <TableHead className="font-bold text-foreground">EMAIL</TableHead>
                        <TableHead className="font-bold text-foreground">COMPANY</TableHead>
                        <TableHead className="font-bold text-foreground">PRODUCT</TableHead>
                        <TableHead className="font-bold text-foreground">DATE</TableHead>
                        <TableHead className="text-right font-bold text-foreground">ACTION</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loading ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-20 text-muted-foreground">LOADING DATA...</TableCell>
                        </TableRow>
                      ) : filteredLeads.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-20 text-muted-foreground">NO LEADS FOUND MATCHING YOUR SEARCH.</TableCell>
                        </TableRow>
                      ) : (
                        filteredLeads.map((lead) => (
                          <TableRow key={lead.id} className="border-border/50 hover:bg-muted/30 transition-colors">
                            <TableCell className="font-bold">{lead.name}</TableCell>
                            <TableCell>{lead.email}</TableCell>
                            <TableCell className="text-muted-foreground italic">{lead.company || "-"}</TableCell>
                            <TableCell>
                              <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 uppercase border border-primary/20">
                                {lead.product || lead.productInterest}
                              </span>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-xs font-mono">
                              {format(new Date(lead.created_at || lead.timestamp), "MMM dd, yyyy HH:mm")}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" className="text-primary font-bold hover:bg-primary/10" onClick={() => alert(`Requirement: ${lead.message}`)}>
                                VIEW DETAILS
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;
