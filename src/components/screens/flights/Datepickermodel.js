import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const today = new Date();
today.setHours(0, 0, 0, 0);

const isSameDay = (a, b) =>
  a && b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const isBetween = (date, from, to) => {
  if (!from || !to) return false;
  return date > from && date < to;
};

// Returns array of date objects for a given month grid (including leading/trailing nulls)
const getMonthGrid = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
};

const DatePickerModal = ({
  visible,
  onClose,
  selectingFor,       // 'departure' | 'return'
  departureDate,
  returnDate,
  onSelectDeparture,
  onSelectReturn,
}) => {
  const initialYear = departureDate ? departureDate.getFullYear() : today.getFullYear();
  const initialMonth = departureDate ? departureDate.getMonth() : today.getMonth();

  const [viewYear, setViewYear] = useState(initialYear);
  const [viewMonth, setViewMonth] = useState(initialMonth);

  const goToPrev = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const goToNext = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const canGoPrev = () => {
    return viewYear > today.getFullYear() ||
      (viewYear === today.getFullYear() && viewMonth > today.getMonth());
  };

  const handleDayPress = (date) => {
    if (!date || date < today) return;
    if (selectingFor === 'departure') {
      onSelectDeparture(date);
      // If return date is before new departure, clear it
      if (returnDate && date >= returnDate) onSelectReturn(null);
    } else {
      onSelectReturn(date);
      // If return before departure, shift departure
      if (departureDate && date < departureDate) onSelectDeparture(date);
    }
    onClose();
  };

  const grid = getMonthGrid(viewYear, viewMonth);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeX}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            {selectingFor === 'departure' ? 'Select Departure Date' : 'Select Return Date'}
          </Text>
        </View>

        {/* Selected summary */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Departure</Text>
            <Text style={[styles.summaryDate, selectingFor === 'departure' && styles.summaryActive]}>
              {departureDate
                ? `${departureDate.getDate()} ${MONTHS[departureDate.getMonth()].slice(0, 3)} ${departureDate.getFullYear()}`
                : '— Select —'}
            </Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Return</Text>
            <Text style={[styles.summaryDate, selectingFor === 'return' && styles.summaryActive]}>
              {returnDate
                ? `${returnDate.getDate()} ${MONTHS[returnDate.getMonth()].slice(0, 3)} ${returnDate.getFullYear()}`
                : '— Select —'}
            </Text>
          </View>
        </View>

        {/* Month navigation */}
        <View style={styles.monthNav}>
          <TouchableOpacity
            onPress={goToPrev}
            disabled={!canGoPrev()}
            style={[styles.navBtn, !canGoPrev() && styles.navBtnDisabled]}
          >
            <Text style={styles.navArrow}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.monthTitle}>
            {MONTHS[viewMonth]} {viewYear}
          </Text>
          <TouchableOpacity onPress={goToNext} style={styles.navBtn}>
            <Text style={styles.navArrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Day headers */}
        <View style={styles.dayHeaders}>
          {DAYS.map(d => (
            <Text key={d} style={styles.dayHeader}>{d}</Text>
          ))}
        </View>

        {/* Calendar grid */}
        <View style={styles.grid}>
          {grid.map((date, idx) => {
            if (!date) return <View key={`empty-${idx}`} style={styles.cell} />;

            const isPast = date < today;
            const isDepart = isSameDay(date, departureDate);
            const isReturn = isSameDay(date, returnDate);
            const isInRange = isBetween(date, departureDate, returnDate);
            const isToday = isSameDay(date, today);

            return (
              <TouchableOpacity
                key={date.toISOString()}
                style={[
                  styles.cell,
                  isInRange && styles.cellInRange,
                  (isDepart || isReturn) && styles.cellSelected,
                  isPast && styles.cellDisabled,
                ]}
                onPress={() => handleDayPress(date)}
                disabled={isPast}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.cellText,
                  isPast && styles.cellTextDisabled,
                  isInRange && styles.cellTextInRange,
                  (isDepart || isReturn) && styles.cellTextSelected,
                  isToday && !isDepart && !isReturn && styles.cellTextToday,
                ]}>
                  {date.getDate()}
                </Text>
                {isDepart && <Text style={styles.cellTag}>Dep</Text>}
                {isReturn && <Text style={styles.cellTag}>Ret</Text>}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Legend */}
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#0F7A6C' }]} />
            <Text style={styles.legendText}>Selected</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#E0F4F1' }]} />
            <Text style={styles.legendText}>In range</Text>
          </View>
          <View style={styles.legendItem}>
            <Text style={[styles.legendDotText]}>●</Text>
            <Text style={styles.legendText}>Today</Text>
          </View>
        </View>

        {/* Done button */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.doneBtn} onPress={onClose}>
            <Text style={styles.doneBtnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F7F9' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  closeBtn: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: '#EDEDED',
    alignItems: 'center', justifyContent: 'center',
    marginRight: 12,
  },
  closeX: { fontSize: 13, color: '#555' },
  title: { fontSize: 16, fontWeight: '600', color: '#000' },

  summaryRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    overflow: 'hidden',
  },
  summaryBox: {
    flex: 1,
    padding: 14,
    alignItems: 'center',
  },
  summaryDivider: {
    width: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 10,
  },
  summaryLabel: { fontSize: 12, color: '#888', marginBottom: 4 },
  summaryDate: { fontSize: 14, fontWeight: '600', color: '#333' },
  summaryActive: { color: '#0F7A6C' },

  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  navBtn: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#fff',
    borderWidth: 1, borderColor: '#E5E5E5',
    alignItems: 'center', justifyContent: 'center',
  },
  navBtnDisabled: { opacity: 0.3 },
  navArrow: { fontSize: 20, color: '#333', lineHeight: 24 },
  monthTitle: { fontSize: 16, fontWeight: '600', color: '#000' },

  dayHeaders: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  dayHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  cell: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cellSelected: {
    backgroundColor: '#0F7A6C',
    borderRadius: 10,
  },
  cellInRange: {
    backgroundColor: '#E0F4F1',
    borderRadius: 0,
  },
  cellDisabled: { opacity: 0.3 },
  cellText: { fontSize: 14, color: '#222', fontWeight: '500' },
  cellTextDisabled: { color: '#BBB' },
  cellTextSelected: { color: '#fff', fontWeight: '700' },
  cellTextInRange: { color: '#0F7A6C' },
  cellTextToday: { color: '#0F7A6C', fontWeight: '700' },
  cellTag: { fontSize: 8, color: '#fff', fontWeight: '600', marginTop: -2 },

  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 16,
  },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 12, height: 12, borderRadius: 6 },
  legendDotText: { fontSize: 12, color: '#0F7A6C' },
  legendText: { fontSize: 12, color: '#666' },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#F6F7F9',
  },
  doneBtn: {
    backgroundColor: '#0F7A6C',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  doneBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});