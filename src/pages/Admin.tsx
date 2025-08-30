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
import { Calendar, Clock, Users, Mail, Phone, MessageSquare } from 'lucide-react';

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
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">J & J Hotel Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {user.email}</span>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Reservations Management
            </CardTitle>
            <CardDescription>
              View and manage hotel reservations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Input
                placeholder="Search by name, email, or date..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </div>

            {loadingReservations ? (
              <div className="text-center py-8">Loading reservations...</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Guests</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredReservations.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          No reservations found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredReservations.map((reservation) => (
                        <TableRow key={reservation.id}>
                          <TableCell className="font-medium">
                            {reservation.name}
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1 text-sm">
                                <Mail className="h-3 w-3" />
                                {reservation.email}
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Phone className="h-3 w-3" />
                                {reservation.phone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1 text-sm">
                                <Calendar className="h-3 w-3" />
                                {new Date(reservation.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-3 w-3" />
                                {reservation.time}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                              <Users className="h-3 w-3" />
                              {reservation.guests}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {reservation.message ? (
                              <div className="flex items-start gap-1 max-w-xs">
                                <MessageSquare className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                <span className="text-sm truncate">{reservation.message}</span>
                              </div>
                            ) : (
                              <span className="text-muted-foreground text-sm">No message</span>
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {new Date(reservation.created_at).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}