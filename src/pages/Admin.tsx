import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { AddReservationDialog } from '@/components/admin/AddReservationDialog';
import { ReservationActions } from '@/components/admin/ReservationActions';
import { Calendar, Clock, Users, Mail, Phone, MessageSquare, Search, Filter, Download } from 'lucide-react';

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message: string | null;
  created_at: string;
}

export default function Admin() {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingReservations, setLoadingReservations] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchReservations();
    }
  }, [user]);

  const fetchReservations = async () => {
    try {
      const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReservations(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch reservations",
        variant: "destructive",
      });
    } finally {
      setLoadingReservations(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const filteredReservations = reservations.filter(reservation =>
    reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.date.includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="border-b bg-card/50 backdrop-blur-sm shadow-luxury">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                J & J Hotel Admin
              </h1>
              <p className="text-muted-foreground mt-1">Manage reservations and hotel operations</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">Welcome back!</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <Button variant="outline" onClick={handleSignOut} className="shadow-sm">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="gradient-card shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Reservations</p>
                  <p className="text-3xl font-bold text-primary">{reservations.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="gradient-card shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today's Reservations</p>
                  <p className="text-3xl font-bold text-accent">
                    {reservations.filter(r => r.date === new Date().toISOString().split('T')[0]).length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-accent/60" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="gradient-card shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Guests</p>
                  <p className="text-3xl font-bold text-secondary-foreground">
                    {reservations.reduce((sum, r) => sum + r.guests, 0)}
                  </p>
                </div>
                <Users className="h-8 w-8 text-secondary-foreground/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-luxury">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="h-6 w-6 text-primary" />
                  Reservations Management
                </CardTitle>
                <CardDescription className="mt-2">
                  View, add, and manage hotel reservations
                </CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <AddReservationDialog onReservationAdded={fetchReservations} />
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or date..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {loadingReservations ? (
              <div className="text-center py-8">Loading reservations...</div>
            ) : (
              <div className="overflow-x-auto">
                <div className="rounded-lg border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold">Guest Details</TableHead>
                        <TableHead className="font-semibold">Contact</TableHead>
                        <TableHead className="font-semibold">Date & Time</TableHead>
                        <TableHead className="font-semibold">Guests</TableHead>
                        <TableHead className="font-semibold">Message</TableHead>
                        <TableHead className="font-semibold">Created</TableHead>
                        <TableHead className="font-semibold">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredReservations.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-12 text-muted-foreground">
                            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p className="text-lg font-medium mb-2">No reservations found</p>
                            <p className="text-sm">Try adjusting your search or add a new reservation</p>
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredReservations.map((reservation) => (
                          <TableRow key={reservation.id} className="hover:bg-muted/30 transition-colors">
                            <TableCell>
                              <div className="font-medium text-foreground">{reservation.name}</div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Mail className="h-3 w-3" />
                                  <span className="truncate max-w-[150px]">{reservation.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Phone className="h-3 w-3" />
                                  {reservation.phone}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                  <Calendar className="h-3 w-3 text-primary" />
                                  {new Date(reservation.date).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  {reservation.time}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary" className="flex items-center gap-1 w-fit bg-primary/10 text-primary">
                                <Users className="h-3 w-3" />
                                {reservation.guests}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {reservation.message ? (
                                <div className="flex items-start gap-2 max-w-xs">
                                  <MessageSquare className="h-3 w-3 mt-0.5 flex-shrink-0 text-accent" />
                                  <span className="text-sm truncate" title={reservation.message}>
                                    {reservation.message}
                                  </span>
                                </div>
                              ) : (
                                <span className="text-muted-foreground text-sm italic">No message</span>
                              )}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {new Date(reservation.created_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <ReservationActions 
                                reservation={reservation}
                                onReservationDeleted={fetchReservations}
                              />
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}